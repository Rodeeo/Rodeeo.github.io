

const form = document.forms.hero;

form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name
   
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.powers = [];
        for (let i=0; i < form.powers.length; i++) {
            if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
            }   
        }
    hero.origin = form.origin.value;   
      
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
 
return hero;
    }

    
    const label = form.querySelector('label');
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = '! Your name is not allowed to start with X.';
    label.append(error);
    function validateInline() {
        const heroName = this.value.toUpperCase();
        if(heroName.startsWith('X')){
        error.style.display = 'block';
        } else {
        error.style.display = 'none';
        }
    }
    function disableSubmit(event) {
        if(event.target.value === ''){
            document.getElementById('submit').disabled = true;
        } else {
            document.getElementById('submit').disabled = false;
        }
    }
    form.heroName.addEventListener('keyup',disableSubmit,false);
   