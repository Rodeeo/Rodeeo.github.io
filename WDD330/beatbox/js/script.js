let beats = null;
const saveBeatElement = document.getElementById('beat-form');
const beatListElement = document.getElementById('examples');
const beatInputElement =  document.getElementById('saveBeat');
var examples = [
    {name: "None", data: "AAAAAAAAAAA"},
    {name: "Basic Loop", data: "iIgICCIiAAA"},
    {name: "Basic Loop 2", data: "qiAAGgADCAg"},
    {name: "Swanky", data: "IgWIUSIEiFA"},
    {name: "Tribal", data: "qgCIAAD/QCA"},
    {name: "Cymbals", data: "AABVAKqqEAA"},
    {name: "My ears!", data: "//////////8"}  ];

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

  let r = 0;
  let build = function(level) {
    r++; if (level > -1) {
      for (var i=0; i < counts[level]; i++) {
        build(level-1); } 
      if (remainders[level] != 0) {
            build(level-2);}
    } else if (level == -1) {
             pattern.push(0); 
    } else if (level == -2) {
           pattern.push(1);        
    } };

  build(level);
  return pattern.reverse();
}

function updateBeats () {
    storeBeats ()
    restartLoop()
}

function setupBeats () {
    let storedBeats = window.localStorage.getItem('dope_beats')
  
    if (storedBeats) {
      beats = JSON.parse(storedBeats)
    } else {
      beats = examples
    }
    updateBeats()
  }

  function storeBeats () {
    window.localStorage.setItem('dope_beats', JSON.stringify(examples))
  }

function addBeat (name, data) {
    examples.push({name, data})
    beatInputElement.value = ''
    updateBeats()
    renderTheBeat ()
  }
 


function renderTheBeat () {
        beatListElement.innerHTML = ''
        beatListElement.addEventListener("change", examplePicked);
        for (var i = 0; i < examples.length; i++) {
            let option = document.createElement("option");
            option.text = examples[i].name;
            option.value = i;
            beatListElement.add(option);
            }
  }
 
// function removeBeat() {

//     beatListElement.remove(beatListElement.selectedIndex);
//     playing=false;
//     } 

function removeBeat() {
    let t = beatListElement.selectedIndex;
    examples.splice(t, 1);
    beatListElement.remove(beatListElement.selectedIndex);
    updateURL(packGrid());
    playing=false;
    for (var r = 0; r < 8; r++) {
        for (var c = 0; c < numSteps; c++) {
            setCell(grid[r][c], false);
            }
        }
    }
  
  // event listeners and triggers
  saveBeatElement.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const beatName = beatInputElement.value;
    addBeat(beatName, packGrid());
  });

Array.prototype.rotate = (function() {
    // save references to array functions to make lookup faster
    let push = Array.prototype.push,
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
let grid = [];
let appStartTime;
let barNumber = 0;
let barDuration = 2.0;
let numSteps = 8;
let stepDuration = barDuration/numSteps;
let previousStep = 0;
let playing = false;
let analyserNode, compressorNode, gainNode;
let fftArray;

function init() {
    renderTheBeat ()
  let grid_table = document.getElementById("grid");
  //Generate the grid
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

//   setRowHighlight(0);

  //Initialize examples select box
//   let examplesSelect = document.getElementById("examples");
//   examplesSelect.addEventListener("change", examplePicked);
//   for (let i = 0; i < examples.length; i++) {
//       let option = document.createElement("option");
//       option.text = examples[i].name;
//       option.value = i;
//       examplesSelect.add(option);
//   }

  let volumeSlider = document.getElementById("volume_slider");
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

  let url = window.location.href;
  if (url.indexOf("=") !== -1) {
      unpackGrid(url.substr(url.indexOf("=") + 1));
  }
}

let bufferList;
function finishedLoading(bufferListParam) {
    bufferList = bufferListParam;
    restartLoop();
}

function examplePicked(sel) {
    let b64 = examples[sel.target.value].data;
    unpackGrid(b64);
    updateURL(packGrid());
    restartLoop();
    updateBeats();
}

function gridClicked(e) {
    let cell = e.target;
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
    for (let r = 0; r < 8; r++) {
        let cell = grid[r][col];
        cell.classList.add("row-highlighted");
        if (flash) {
            cell.style.animation = "";
        } else {
            cell.style.animation = "none";
        }
    }
}

function playSound(buffer, time) {
    let source = context.createBufferSource();
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
        for (let r = 0; r < 8; r++) {
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
    let time = context.currentTime - appStartTime;
    let stepsSinceStart = Math.floor(time/stepDuration);
    let step = mod(stepsSinceStart, numSteps);
    if (previousStep != step) {
        setRowHighlight(step);
        let nextStep = mod(step + 1, numSteps);
        for (let r = 0; r < 8; r++) {
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
    let u8 = [];
    let num = 0;
    let bitIndex = 0;
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
    let u8 = atob(b64).split("").map(function(c) {
        return c.charCodeAt(0); });
    let bitCount = 0;
    let u8Index = 0;
    let num = u8[u8Index];
    for (var i = 0; i < u8.length; i++) {
        for (var j = 0; j < 8; j++) {
            let r = Math.floor(bitCount / 8);
            let c = bitCount % 8;
            let val = (num & (1 << 7-j)) !== 0;
            setCell(grid[r][c], val);
            if (bitCount % 8 === 7) {
                u8Index++;
                num = u8[u8Index];
            }
            bitCount++;
        }
    }
}

document.getElementById("play").addEventListener("click", function(evt) {evt.preventDefault();
    updateURL(packGrid());
    restartLoop();
    playSound ();
});

document.getElementById("stop").addEventListener("click", function() { playing=false; });