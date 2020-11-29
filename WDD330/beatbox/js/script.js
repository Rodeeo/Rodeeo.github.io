// Helper functions
function mod(n, m) {
    return ((n % m) + m) % m;
}
// Taken from https://gist.github.com/withakay/1286731
function bjorklund(steps, pulses) {
  
  steps = Math.round(steps);
  pulses = Math.round(pulses);  

  if(pulses > steps || pulses == 0 || steps == 0) {
    return new Array();
  }

  pattern = [];
     counts = [];
     remainders = [];
     divisor = steps - pulses;
  remainders.push(pulses);
  level = 0;

  while(true) {
    counts.push(Math.floor(divisor / remainders[level]));
    remainders.push(divisor % remainders[level]);
    divisor = remainders[level]; 
         level += 1;
    if (remainders[level] <= 1) {
      break;
    }
  }
  
  counts.push(divisor);

  var r = 0;
  var build = function(level) {
    r++;
    if (level > -1) {
      for (var i=0; i < counts[level]; i++) {
        build(level-1); 
      } 
      if (remainders[level] != 0) {
            build(level-2);
      }
    } else if (level == -1) {
             pattern.push(0); 
    } else if (level == -2) {
           pattern.push(1);        
    } 
  };

  build(level);
  return pattern.reverse();
}

Array.prototype.rotate = (function() {
    // save references to array functions to make lookup faster
    var push = Array.prototype.push,
        splice = Array.prototype.splice;

    return function(count) {
        var len = this.length >>> 0, // convert to uint
            count = count >> 0; // convert to int

        // convert count to value in range [0, len)
        count = ((count % len) + len) % len;

        // use splice.call() instead of this.splice() to make function generic
        push.apply(this, splice.call(this, 0, count));
        return this;
    };
})();

window.onload = init;
var context;
var bufferLoader;
var grid = [];
var appStartTime;
var barNumber = 0;
var barDuration = 2.0;
var numSteps = 8;
var stepDuration = barDuration/numSteps;
var previousStep = 0;
var playing = false;
var analyserNode, compressorNode, gainNode;
var fftArray;

var examples = [{name: "None", data: "AAAAAAAAAAA"},
                {name: "Basic Loop", data: "iIgICCIiAAA"},
                {name: "Basic Loop 2", data: "qiAAGgADCAg"},
                {name: "Swanky", data: "qiAAGgADCAg"},
                {name: "Tribal", data: "qgCqAAS7QKo"},
                {name: "Cymbals", data: "AABVAKqqEAA"},
                {name: "My ears!", data: "//////////8"}];

function init() {
  var grid_table = document.getElementById("grid");

  // Generate the grid
  for (var r = 0; r < 8; r++) {
      grid.push([]);
      var row = grid_table.insertRow(r);
      for (var c = 0; c < numSteps; c++) {
          var cell = row.insertCell(c);
          cell.id = r + "," + c;
          cell.addEventListener("click", gridClicked, false);
          cell.addEventListener("animationend", function(e) {
              e.target.style.animation = "none";
          }, false)
          cell.cellActive = false;
          cell.r = r;
          cell.c = c;
          if (c % 8 >= 4)
              cell.classList.add("type2");
          grid[r].push(cell);
      }
  }

  setRowHighlight(0);

  // Initialize examples select box
  var examplesSelect = document.getElementById("examples");
  examplesSelect.addEventListener("change", examplePicked);
  for (var i = 0; i < examples.length; i++) {
      var option = document.createElement("option");
      option.text = examples[i].name;
      option.value = i;
      examplesSelect.add(option);
  }

  var volumeSlider = document.getElementById("volume_slider");
  volumeSlider.addEventListener("input", function(e) {
      gainNode.gain.value = Math.pow(e.target.value/1000, 2);
  });

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
  
  analyserNode = context.createAnalyser();
  analyserNode.fftSize = 128;
  fftArray = new Uint8Array(analyserNode.frequencyBinCount);

  gainNode = context.createGain();
  gainNode.gain.value = Math.pow(volumeSlider.value/1000, 2);
  compressorNode = context.createDynamicsCompressor();


  gainNode.connect(compressorNode);
  compressorNode.connect(analyserNode);
  analyserNode.connect(context.destination);

  window.setInterval(updateGrid, 5);



  appStartTime = context.currentTime;
  step = 0;

  bufferLoader = new BufferLoader(
    context,
    [
      'clips/kick-808.wav',
      'clips/clap-808.wav',
      'clips/hihat-808.wav',
      'clips/snare-808.wav',
      'clips/openhat-808.wav',
      'clips/kick-plain.wav',
      'clips/perc-808.wav',
      'clips/tom-808.wav',
    ],
    finishedLoading
    );

  bufferLoader.load();

  var url = window.location.href;
  if (url.indexOf("=") !== -1) {
      unpackGrid(url.substr(url.indexOf("=") + 1));
  }
}

var bufferList;
function finishedLoading(bufferListParam) {
    bufferList = bufferListParam;
    restartLoop();
}

function examplePicked(sel) {
    var b64 = examples[sel.target.value].data;
    unpackGrid(b64);
    updateURL(packGrid());
    restartLoop();
}

function gridClicked(e) {
    var cell = e.target;
    setCell(cell, !cell.cellActive);
    updateURL(packGrid());
}

function setCell(cell, value) {
    cell.cellActive = value;
    cell.style.animation = "none";
    if (value) {
        cell.classList.add("selected");
    } else {
        cell.classList.remove("selected");
    }
}

function setRowHighlight(col, flash) {
    if (typeof flash === "undefined")
        flash = true;

    for (var c = 0; c < numSteps; c++) {
        for (var r = 0; r < 8; r++) {
            var cell = grid[r][c];
            cell.classList.remove("row-highlighted");
        }
    }
    for (var r = 0; r < 8; r++) {
        var cell = grid[r][col];
        cell.classList.add("row-highlighted");
        if (flash) {
            cell.style.animation = "";
        } else {
            cell.style.animation = "none";
        }
    }
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(gainNode);
    source.start(time);
}

function restartLoop() {
    playing=false;
    setRowHighlight(0, false);
    setTimeout(function() {
        setRowHighlight(0, true);
        appStartTime = context.currentTime;
        step = 0;
        prevousStep = -1;
        for (var r = 0; r < 8; r++) {
            if (grid[r][0].cellActive) {
                playSound(bufferList[r], appStartTime);
            }
        }
        playing = true;
    }, stepDuration*2*1000);
}

function updateGrid() {
    if (!playing)
        return;
    var time = context.currentTime - appStartTime;
    var stepsSinceStart = Math.floor(time/stepDuration);
    var step = mod(stepsSinceStart, numSteps);
    if (previousStep != step) {
        setRowHighlight(step);
        var nextStep = mod(step + 1, numSteps);
        for (var r = 0; r < 8; r++) {
            if (grid[r][nextStep].cellActive) {
                playSound(bufferList[r], appStartTime + (stepsSinceStart + 1)*stepDuration);
            }
        }
        previousStep = step;
    }
}

function updateURL(b64) {
    window.history.replaceState({data: b64}, "audiotest", '?data=' + b64);
}

// Packs the grid state into base64
function packGrid() {
    var u8 = [];
    var num = 0;
    var bitIndex = 0;
    for (var r = 0; r < 8; r++) {
        for (var c = 0; c < numSteps; c++) {
            if (grid[r][c].cellActive) {
                num += 1;
            }
            if (bitIndex % 8 === 7) {
                u8.push(num);
                num = 0;
            } else {
                num = num << 1;
            }
            bitIndex++;
        }
    }
    return btoa(String.fromCharCode.apply(null,u8)).replace(/\=/g,"");
}

// Unpacks a base64 stringd to grid state
function unpackGrid(b64) {
    var u8 = atob(b64).split("").map(function(c) {
        return c.charCodeAt(0); });
    var bitCount = 0;
    var u8Index = 0;
    var num = u8[u8Index];
    for (var i = 0; i < u8.length; i++) {
        for (var j = 0; j < 8; j++) {
            var r = Math.floor(bitCount / 8);
            var c = bitCount % 8;
            var val = (num & (1 << 7-j)) !== 0;
            setCell(grid[r][c], val);
            if (bitCount % 8 === 7) {
                u8Index++;
                num = u8[u8Index];
            }
            bitCount++;
        }
    }
}


document.getElementById("play").addEventListener("click", function() { restartLoop();
    updateURL(packGrid()); });

document.getElementById("stop").addEventListener("click", function() { playing=false; });

