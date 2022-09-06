const childAge = parseInt(prompt("Введіть вік дитини (від 0 до 3 років)", "2"));
const schoolAge = 7;
const higherEducationAge = 16;
const higherFinishAge = 21;
const enterSchool = schoolAge - childAge;
const enterEducation = higherEducationAge - childAge;
const finishEducation = higherFinishAge - childAge;
document.write(`Через ${enterSchool} років дитина закінчить відвідувати садочок, піде у школу. 
  Через ${enterEducation} рокiв закiнчить школу i пiде у вищий навчальний заклад. 
  Через ${finishEducation} рокiв закiнчить навчання у вищому навчальному закладi.`);
