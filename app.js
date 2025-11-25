// All 13 topics data
const allTopics = [
  { id: 1, name: "Preventive medicine. Hygiene and Ecology", questionCount: 21 },
  { id: 2, name: "Air pollution", questionCount: 13 },
  { id: 3, name: "Meaning of the climate", questionCount: 19 },
  { id: 4, name: "Microclimate", questionCount: 25 },
  { id: 5, name: "Water I", questionCount: 30 },
  { id: 6, name: "Water II", questionCount: 34 },
  { id: 7, name: "Hospital Hygiene", questionCount: 33 },
  { id: 8, name: "Hygiene of children", questionCount: 45 },
  { id: 9, name: "Nutrition and Health", questionCount: 95 },
  { id: 10, name: "Hygienic value of Vitamins and Minerals", questionCount: 89 },
  { id: 11, name: "Food Hygiene and foodborne diseases", questionCount: 31 },
  { id: 12, name: "The hygienic value of Radiation", questionCount: 18 },
  { id: 13, name: "Occupational health. Occupational diseases", questionCount: 105 }
];

// Complete quiz data bank - Topics 1-4 FULLY POPULATED with EXACT PDF TEXT
const quizDataBank = {
  // Topic 1: Preventive medicine. Hygiene and Ecology (21 questions) - EXACT PDF TEXT
  1: [
    {q: "The concept of multifactorial causation of disease was propounded by", o: ["Hippocrates", "Robert Koch", "Winslow", "Pettenkofer"], c: [3], t: "s"},
    {q: "Early diagnosis and treatment is a_____prevention", o: ["Primary", "Secondary", "Tertiary", "Quartenary"], c: [1], t: "s"},
    {q: "According to WHO classification, mild mental retardation is IQ of", o: ["60-70", "50-70", "35-49", "20-34"], c: [1], t: "s"},
    {q: "Severe mental retardation is classified as IQ of", o: ["60-70", "50-70", "34-49", "20-34"], c: [3], t: "s"},
    {q: "The primary objective of any acute communicable disease programmer should be", o: ["Diagnosis", "Treatment", "Rehabilitation", "Prevention"], c: [3], t: "s"},
    {q: "The programmer to prevent deaths due to diarrhoea should stress on", o: ["Oral hygiene", "Oral rehydration", "Antibiotics", "Milk hygiene"], c: [1], t: "s"},
    {q: "The world's first international health agency is", o: ["World Health Organization", "UNICEF", "Pan American Sanitary bureau", "Red cross"], c: [2], t: "s"},
    {q: "World health organization was established in the year", o: ["1942", "1944", "1946", "1948"], c: [2], t: "s"},
    {q: "World Health Day is celebrated every year on", o: ["1st Feb", "7th April", "31st May", "1st December"], c: [1], t: "s"},
    {q: "The head quarters of WHO is at", o: ["Paris", "Rome", "Geneva", "New York"], c: [2], t: "s"},
    {q: "All are true regarding organization of WHO except", o: ["It is subordinate to United Nations", "Has its own constitution", "Membership to WHO & UN is optional", "Has its own budget"], c: [0], t: "s"},
    {q: "UNICEF was established in the year", o: ["1942", "1944", "1946", "1948"], c: [2], t: "s"},
    {q: "UNICEF day is celebrated every year on", o: ["1st Dec.", "11th Dec.", "21st Dec.", "31st Dec."], c: [1], t: "s"},
    {q: "The headquarters of UNICEF is at", o: ["Paris", "Rome", "Geneva", "New York"], c: [3], t: "s"},
    {q: "Hygiene as a science:", o: ["Studying the influence of natural external factors on man health.", "Find out the harmful factors.", "Work out The preventives measures against the negative influence of external factors.", "Work out the hygienic recommended standards.", "Studying the biological relation between the environment and the body."], c: [0, 2, 3], t: "m"},
    {q: "Man ecology as a discipline:", o: ["Studying the influence of the natural environment on man health.", "Find out the harmful external factors.", "Work out the hygienic recommended standards.", "Studying the biological relation between the environment and the body."], c: [3], t: "s"},
    {q: "Research methods which used in hygienic science are:", o: ["Physical", "Chemical", "Physiological", "Bacteriological", "Experimental"], c: [0, 1, 2, 3, 4], t: "m"},
    {q: "The manifestation of negative influence of ecological factors are:", o: ["Change of gasses content in atmosphere.", "Depletion of the ozone layer thickness.", "Change the climate.", "Increase the number of man morbidity."], c: [0, 1, 2, 3], t: "m"},
    {q: "Which of the following factors take part in formation of man health:", o: ["Genetic", "Endemic", "Nature and climate", "Ecological"], c: [0, 2, 3], t: "m"},
    {q: "Point out the real % of illness because of the ecological factors (WHO reports):", o: ["10%", "25%", "50%", "73%"], c: [1], t: "s"},
    {q: "The founder of ecology as a science:", o: ["Haeckel", "Mebeos", "Grinel", "Vernandsky"], c: [0], t: "s"}
  ],
  
  // Topic 2: Air pollution (13 questions) - EXACT PDF TEXT
  2: [
    {q: "Coh units is used to express air pollution caused by", o: ["Sulphur dioxide", "Carbon monoxide", "Smoke", "Oxidants"], c: [2], t: "s"},
    {q: "All are indicators of air pollution except", o: ["Soiling index", "McArdle index", "Suspended particle count", "SO2 Concentration"], c: [1], t: "s"},
    {q: "CO2 content of air is measured by", o: ["Pettenkofer's test", "Horrock's test", "Both the above", "None of the above"], c: [0], t: "s"},
    {q: "Leading source of air pollution is", o: ["Industry", "Power plants", "Transport vehicle", "Crop spraying"], c: [2], t: "s"},
    {q: "Digestion, air drying, vacuum filtration and heat drying are associated with", o: ["Air pollution control", "Water purification", "Milk processing", "Sludge treatment"], c: [3], t: "s"},
    {q: "The layers of the earth atmosphere:", o: ["Troposphere", "Stratosphere", "Vacuum sphere", "Ion sphere"], c: [0, 1, 3], t: "m"},
    {q: "An air pollution may cause:", o: ["An increase in the % of skin diseases", "An increase in % of eye diseases", "An increase in % of lungs diseases", "An increase in % of cancers"], c: [0, 2, 3], t: "m"},
    {q: "The hygienic values of CO2 in the air are:", o: ["Take part in nature cycle of the elements", "Stimulate the breathing function", "Show the level of air pollution in the rooms", "High concentration of CO2 dangerous for the body"], c: [1, 2, 3], t: "m"},
    {q: "The concentration of oxygen in different layers of the atmosphere is:", o: ["Decreasing in high layers", "Increasing in high layers", "Usually without any change"], c: [0], t: "s"},
    {q: "Influence of the air pollution on the health:", o: ["Increase the skin diseases", "Increase the diseases of the eyes", "Increases the breathing systems diseases", "Increase the % of cancers"], c: [0, 2, 3], t: "m"},
    {q: "Zones of the city:", o: ["Residence zone", "Industrial zone", "Sport zone", "Green zone"], c: [0, 1, 3], t: "m"},
    {q: "Prevention of air pollution:", o: ["Legal measures", "Proper foods", "Health education", "Green zones"], c: [0, 2, 3], t: "m"},
    {q: "Meaning of sanitary protective zone is:", o: ["Distance between industrial enterprises", "Distance between houses", "Distance between residence zone and industrial zone"], c: [2], t: "s"}
  ],
  
  // Topic 3: Meaning of the climate (19 questions) - EXACT PDF TEXT
  3: [
    {q: "Unit of measurement of brightness of point source is", o: ["Candela", "Lumen", "Lux", "Lambert"], c: [0], t: "s"},
    {q: "Flow of light is expressed as", o: ["Candela", "Lumen", "Lux", "Lambert"], c: [1], t: "s"},
    {q: "Unit measuring amount of light reaching surface is", o: ["Candela", "Lumen", "Lux", "Lambert"], c: [2], t: "s"},
    {q: "Unit measuring amount of light reemitted by surface is", o: ["Candela", "Lumen", "Lux", "Lambert"], c: [3], t: "s"},
    {q: "The minimum illumination for satisfactory vision is _____ foot candles", o: ["5-10", "10-15", "15-20", "20-25"], c: [2], t: "s"},
    {q: "The integral flow of the sun light give off the following specters:", o: ["UV-rays", "Visible light", "Infrared", "Cosmic rays"], c: [0, 1, 2], t: "m"},
    {q: "The biological importance of the sun rays are to:", o: ["Stimulate the body activity", "Increase the metabolism processes", "Carry out the vision functions", "Has erithimic effect"], c: [0, 1, 2, 3], t: "m"},
    {q: "Effect of infrared rays are:", o: ["Increase the skin heat (warming the skin)", "Increase the body temperature", "Widening the skin capillary", "Increase the metabolism", "Having bactericidal effect"], c: [0, 1, 2, 3], t: "m"},
    {q: "The main signs of erythema (redness) causes by UV-rays:", o: ["Clear border lining", "Non distinctive border", "Skin inflation", "With high temperature"], c: [2, 3], t: "m"},
    {q: "Psychrometer measures:", o: ["Humidity", "Temperature", "Air velocity"], c: [0], t: "s"},
    {q: "Anemometer measures:", o: ["Humidity", "Air pollution", "Temperature", "Air velocity"], c: [3], t: "s"},
    {q: "The main complications under high atmospheric pressure are:", o: ["Rupture of spleen", "Air embolism", "Nausea"], c: [1], t: "s"},
    {q: "The following are the result of effect of low pressure:", o: ["Increased respiration", "Increased cardiac output", "Increased concentration of Hb"], c: [0, 1, 2], t: "m"},
    {q: "Point out the UV-rays border in sun rays:", o: ["10-400 nm.", "200-400 nm.", "400-761 nm."], c: [0], t: "s"},
    {q: "Point out the UV-rays border which produced by artificial sources (lamps):", o: ["10-400", "200-400 nm", "400-761 nm"], c: [1], t: "s"},
    {q: "Conjunctivitis and keratitis is caused due to exposure to:", o: ["UV rays", "Heat", "Vibration"], c: [0], t: "s"},
    {q: "Which of the following is true about UV rays:", o: ["UV rays convert dihydrocholesterol in the skin to vitamin D", "Synthesize of melatonin pigments", "Bactericide effect"], c: [0, 1, 2], t: "m"},
    {q: "The indication for using UV rays lamps:", o: ["The deficiency of vitamin D", "In winter time in the north area", "High atmospheric pressure", "For those who worked underground"], c: [0, 1, 3], t: "m"},
    {q: "Contraindication agents using artificial source of UV rays:", o: ["Active pulmonary tuberculosis", "Thyroids", "Disease of the liver", "Disease of kidney"], c: [0, 1, 2, 3], t: "m"}
  ],
  
  // Topic 4: Microclimate (25 questions) - EXACT PDF TEXT
  4: [
    {q: "Anemometer measures", o: ["Humidity", "Heat stress", "Air pollution", "Air velocity"], c: [3], t: "s"},
    {q: "Psychometer measures", o: ["Humidity", "Rainfall", "Frost", "Air velocity"], c: [0], t: "s"},
    {q: "For good ventilation, the door and windows should have____the floor area", o: ["1/4", "1/2", "2/5", "3/4"], c: [2], t: "s"},
    {q: "The minimum per capita cubic space is fixed at", o: ["100 c.ft", "500 c.ft", "1000 c.ft", "1500 c.ft"], c: [1], t: "s"},
    {q: "Solid wastes in the cities are called", o: ["Refuse", "Garbage", "Litter", "Sewage"], c: [0], t: "s"},
    {q: "Solid wastes occurring in the country side is called", o: ["Refuse", "Garbage", "Litter", "Sewage"], c: [2], t: "s"},
    {q: "Waste matter arising from waste food and vegetables is", o: ["Refuse", "Garbage", "Litter", "Sewage"], c: [1], t: "s"},
    {q: "Waste water containing solid and liquid excreta is", o: ["Refuse", "Garbage", "Sullage", "Sewage"], c: [3], t: "s"},
    {q: "All are features of septic tank except", o: ["Ideal retention period - 48 hours", "Minimum capacity - 500 gallons", "Aerobic oxidation takes place outside", "Sludge is solids setting down"], c: [0], t: "s"},
    {q: "Amount of the light on the surface is measured as:", o: ["Lux", "Lumen", "Candle"], c: [0], t: "s"},
    {q: "What are the main sensitive body functions in relation to changing of microclimate conditions:", o: ["Thermoregulation", "Breathing", "Digestion", "Cardiovascular-function"], c: [0, 3], t: "m"},
    {q: "The main signs of body coolness are:", o: ["Structure change in the cell", "Spasm of the peripheral blood vascular", "Decrease the body resistance", "Increase the lung ventilation"], c: [1, 2], t: "m"},
    {q: "What are the main signs of the body overheating:", o: ["Increase the lung ventilation", "Increase the body temperature", "Increase the pulse", "Widening the peripheral vascular"], c: [0, 1, 2, 3], t: "m"},
    {q: "Which signs we need to assess the level of natural lighting on the work place:", o: ["Coefficient of the light", "Coefficient of the natural light", "Coefficient of the depth's", "Angle of the hole"], c: [0, 1, 2, 3], t: "m"},
    {q: "What are the hygienic demands for artificial source of the light:", o: ["Must not change the physical and chemical content of the air", "Must be safe for the bios", "Must be uniform light", "Continua's by character"], c: [0, 1, 2], t: "m"},
    {q: "The advantages of neon lamps are:", o: ["Economical source", "With more brightness", "Dispersed light", "Without sharp shadows"], c: [0, 1, 2, 3], t: "m"},
    {q: "What are the main causes of stroboscopic effect:", o: ["Light dispersion", "Incontinently lighting", "Low bright lamps"], c: [1], t: "s"},
    {q: "The causes of discomfort in an overcrowded poorly ventilated room are:", o: ["Temperature", "CO2", "Air change"], c: [0, 1], t: "m"},
    {q: "The hygienic values of CO2 in the air are:", o: ["Take part in nature cycle of the elements", "Stimulate the breathing function", "Show the level of air pollution in the rooms", "High concentration of CO2 dangerous for the body"], c: [1, 2, 3], t: "m"},
    {q: "Sanitary signs of soil:", o: ["Sanitary number", "Coli-titer", "Number of rain worm in 1m3 of soil"], c: [0, 1, 2], t: "m"},
    {q: "The pollutant sources of soil are:", o: ["Animal excreta", "Factories", "Wastes", "Transport"], c: [0, 1, 2, 3], t: "m"},
    {q: "Signs of soil sanitary condition are:", o: ["Coli-titer", "Titer of anaerobe", "Sanitary number", "Concentration of SiO3"], c: [0, 1, 2], t: "m"},
    {q: "Sanitary number of the clean uncontaminated soil is:", o: ["1.0", "0.7", "0.2"], c: [0], t: "s"},
    {q: "The main complications under high atmospheric pressure are:", o: ["Rupture of spleen", "Air embolism", "Nausea"], c: [1], t: "s"},
    {q: "Point out the UV-rays border in sun rays:", o: ["10-400 nm.", "200-400 nm.", "400-761 nm."], c: [0], t: "s"}
  ]
};

// Log total questions to verify
let totalQ = 0;
for (let topicId = 1; topicId <= 4; topicId++) {
  if (quizDataBank[topicId]) {
    totalQ += quizDataBank[topicId].length;
    console.log('Topic ' + topicId + ': ' + quizDataBank[topicId].length + ' questions');
  }
}
console.log('TOTAL QUESTIONS IN LINK 1 (Topics 1-4): ' + totalQ + '/78');

// Quiz state
let state = {
  userName: '',
  selectedTopics: [],
  currentQuestion: 0,
  userAnswers: [],
  correctCount: 0,
  showingFeedback: false,
  quizQuestions: []
};

// Initialize home page - Show only Topics 1-4
function initHomePage() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = '';
  
  // Show only first 4 topics
  for (let i = 0; i < 4; i++) {
    const topic = allTopics[i];
    const box = document.createElement('div');
    box.className = 'topic-box';
    box.onclick = () => toggleTopic(topic.id);
    
    box.innerHTML = `
      <div class="topic-number">Topic ${topic.id}</div>
      <div class="topic-name">${topic.name}</div>
      <div class="topic-questions">${topic.questionCount} Questions</div>
    `;
    
    grid.appendChild(box);
  }
}

function toggleTopic(topicId) {
  const index = state.selectedTopics.indexOf(topicId);
  const boxes = document.querySelectorAll('.topic-box');
  const box = boxes[topicId - 1];
  
  if (index > -1) {
    state.selectedTopics.splice(index, 1);
    box.classList.remove('selected');
  } else {
    state.selectedTopics.push(topicId);
    box.classList.add('selected');
  }
  
  state.selectedTopics.sort((a, b) => a - b);
}

// Initialize on load
window.addEventListener('DOMContentLoaded', initHomePage);

function startQuiz() {
  const nameInput = document.getElementById('userName');
  const name = nameInput.value.trim();
  
  if (!name || state.selectedTopics.length === 0) {
    document.getElementById('nameError').style.display = 'block';
    return;
  }
  
  document.getElementById('nameError').style.display = 'none';
  state.userName = name;
  
  // Build quiz from selected topics
  state.quizQuestions = [];
  state.selectedTopics.forEach(topicId => {
    if (quizDataBank[topicId]) {
      state.quizQuestions.push(...quizDataBank[topicId]);
    }
  });
  
  if (state.quizQuestions.length === 0) {
    alert('No questions available for selected topics.');
    return;
  }
  
  state.currentQuestion = 0;
  state.userAnswers = new Array(state.quizQuestions.length).fill(null);
  state.correctCount = 0;
  state.showingFeedback = false;
  
  showPage('quizPage');
  createQuestionNavigator();
  displayQuestion();
}

function createQuestionNavigator() {
  const grid = document.getElementById('questionGrid');
  grid.innerHTML = '';
  
  for (let i = 0; i < state.quizQuestions.length; i++) {
    const box = document.createElement('div');
    box.className = 'question-box';
    box.textContent = i + 1;
    box.id = `qbox-${i}`;
    box.onclick = () => jumpToQuestion(i);
    grid.appendChild(box);
  }
  
  updateNavigatorStatus();
}

function jumpToQuestion(index) {
  if (!state.showingFeedback) {
    const answer = getCurrentAnswer();
    if (answer !== null) {
      const question = state.quizQuestions[state.currentQuestion];
      const wasCorrectBefore = state.userAnswers[state.currentQuestion] !== null && 
        isAnswerCorrect(state.userAnswers[state.currentQuestion], question.c, question.t);
      const isCorrectNow = isAnswerCorrect(answer, question.c, question.t);
      
      if (!wasCorrectBefore && isCorrectNow) {
        state.correctCount++;
      } else if (wasCorrectBefore && !isCorrectNow) {
        state.correctCount--;
      }
      
      state.userAnswers[state.currentQuestion] = answer;
    }
  }
  
  state.showingFeedback = false;
  state.currentQuestion = index;
  displayQuestion();
}

function updateNavigatorStatus() {
  for (let i = 0; i < state.quizQuestions.length; i++) {
    const box = document.getElementById(`qbox-${i}`);
    if (!box) continue;
    
    box.className = 'question-box';
    
    if (i === state.currentQuestion) {
      box.classList.add('current');
    }
    
    const answer = state.userAnswers[i];
    if (answer !== null) {
      const question = state.quizQuestions[i];
      const isCorrect = isAnswerCorrect(answer, question.c, question.t);
      
      if (isCorrect) {
        box.classList.add('correct');
      } else {
        box.classList.add('incorrect');
      }
    }
  }
}

function displayQuestion() {
  const question = state.quizQuestions[state.currentQuestion];
  const questionNum = state.currentQuestion + 1;
  const total = state.quizQuestions.length;
  
  document.getElementById('questionNumber').textContent = `Question ${questionNum} of ${total}`;
  document.getElementById('questionText').textContent = question.q;
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  const inputType = question.t === 's' ? 'radio' : 'checkbox';
  const inputName = question.t === 's' ? 'answer' : '';
  
  question.o.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const input = document.createElement('input');
    input.type = inputType;
    input.id = `option${index}`;
    input.value = index;
    if (inputType === 'radio') {
      input.name = inputName;
    }
    
    if (state.userAnswers[state.currentQuestion] !== null) {
      if (question.t === 's') {
        if (state.userAnswers[state.currentQuestion] === index) {
          input.checked = true;
        }
      } else {
        if (state.userAnswers[state.currentQuestion].includes(index)) {
          input.checked = true;
        }
      }
    }
    
    const label = document.createElement('label');
    label.htmlFor = `option${index}`;
    label.textContent = option;
    
    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    optionsContainer.appendChild(optionDiv);
    
    optionDiv.addEventListener('click', function(e) {
      if (e.target !== input) {
        input.checked = question.t === 's' ? true : !input.checked;
      }
      
      // For single-answer questions, show feedback immediately
      if (question.t === 's' && input.checked && !state.showingFeedback) {
        const answer = getCurrentAnswer();
        if (answer !== null) {
          const wasCorrectBefore = state.userAnswers[state.currentQuestion] !== null && 
            isAnswerCorrect(state.userAnswers[state.currentQuestion], question.c, question.t);
          const isCorrectNow = isAnswerCorrect(answer, question.c, question.t);
          
          if (!wasCorrectBefore && isCorrectNow) {
            state.correctCount++;
          } else if (wasCorrectBefore && !isCorrectNow) {
            state.correctCount--;
          }
          
          state.userAnswers[state.currentQuestion] = answer;
          updateProgress();
          updateNavigatorStatus();
          setTimeout(() => showFeedback(), 100);
        }
      }
    });
  });
  
  document.getElementById('prevBtn').disabled = state.currentQuestion === 0;
  
  const hasAnswer = state.userAnswers[state.currentQuestion] !== null;
  if (hasAnswer && !state.showingFeedback && question.t === 's') {
    setTimeout(() => showFeedback(), 0);
  }
  
  document.getElementById('nextBtn').textContent = 
    state.currentQuestion === total - 1 ? 'Finish' : 'Next';
  
  document.getElementById('answerError').style.display = 'none';
  
  updateProgress();
  updateNavigatorStatus();
}

function getCurrentAnswer() {
  const question = state.quizQuestions[state.currentQuestion];
  
  if (question.t === 's') {
    const selected = document.querySelector('input[name="answer"]:checked');
    return selected ? Number(selected.value) : null;
  } else {
    const checkboxes = document.querySelectorAll('#optionsContainer input[type="checkbox"]:checked');
    const selected = Array.from(checkboxes).map(cb => Number(cb.value));
    return selected.length > 0 ? selected : null;
  }
}

function isAnswerCorrect(answer, correct, t) {
  if (t === 's') {
    return answer === correct[0];
  } else {
    if (!answer || answer.length !== correct.length) return false;
    const sortedAnswer = [...answer].sort();
    const sortedCorrect = [...correct].sort();
    return sortedAnswer.every((val, idx) => val === sortedCorrect[idx]);
  }
}

function showFeedback() {
  const question = state.quizQuestions[state.currentQuestion];
  const options = document.querySelectorAll('#optionsContainer .option');
  
  options.forEach((optionDiv, index) => {
    const input = optionDiv.querySelector('input');
    input.disabled = true;
    optionDiv.classList.add('disabled');
    
    const isCorrectAnswer = question.c.includes(index);
    const isSelected = input.checked;
    
    if (isCorrectAnswer) {
      optionDiv.classList.add('correct');
    }
    if (isSelected && !isCorrectAnswer) {
      optionDiv.classList.add('incorrect');
    }
  });
  
  state.showingFeedback = true;
}

function nextQuestion() {
  const answer = getCurrentAnswer();
  
  if (!state.showingFeedback) {
    if (answer === null) {
      document.getElementById('answerError').style.display = 'block';
      return;
    }
    
    const question = state.quizQuestions[state.currentQuestion];
    const wasCorrectBefore = state.userAnswers[state.currentQuestion] !== null && 
      isAnswerCorrect(state.userAnswers[state.currentQuestion], question.c, question.t);
    const isCorrectNow = isAnswerCorrect(answer, question.c, question.t);
    
    if (!wasCorrectBefore && isCorrectNow) {
      state.correctCount++;
    } else if (wasCorrectBefore && !isCorrectNow) {
      state.correctCount--;
    }
    
    state.userAnswers[state.currentQuestion] = answer;
    updateProgress();
    updateNavigatorStatus();
    
    showFeedback();
    return;
  }
  
  state.showingFeedback = false;
  
  if (state.currentQuestion < state.quizQuestions.length - 1) {
    state.currentQuestion++;
    displayQuestion();
    updateNavigatorStatus();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (state.currentQuestion > 0) {
    state.showingFeedback = false;
    state.currentQuestion--;
    displayQuestion();
    updateNavigatorStatus();
  }
}

function updateProgress() {
  const total = state.quizQuestions.length;
  const percentage = Math.round((state.correctCount / total) * 100 * 100) / 100;
  const displayPercentage = percentage.toFixed(2);
  
  document.getElementById('progressText').textContent = `${displayPercentage}%`;
  document.getElementById('progressFill').style.width = `${percentage}%`;
  document.getElementById('progressFill').textContent = `${displayPercentage}%`;
}

function showResults() {
  const total = state.quizQuestions.length;
  const percentage = Math.round((state.correctCount / total) * 100);
  
  document.getElementById('finalScore').textContent = `${percentage}%`;
  document.getElementById('scoreDetails').textContent = 
    `${state.correctCount} out of ${total} correct`;
  
  showPage('resultsPage');
}

function restartQuiz() {
  state = {
    userName: '',
    selectedTopics: [],
    currentQuestion: 0,
    userAnswers: [],
    correctCount: 0,
    showingFeedback: false,
    quizQuestions: []
  };
  document.getElementById('userName').value = '';
  showPage('homePage');
  initHomePage();
}

// Report functionality
function openReportModal() {
  const question = state.quizQuestions[state.currentQuestion];
  document.getElementById('reportQuestion').textContent = question.q;
  document.getElementById('reportText').value = '';
  document.getElementById('reportModal').classList.add('active');
}

function closeReportModal() {
  document.getElementById('reportModal').classList.remove('active');
}

function submitReport() {
  const question = state.quizQuestions[state.currentQuestion];
  const feedback = document.getElementById('reportText').value.trim();
  
  if (!feedback) {
    alert('Please provide your correction or feedback.');
    return;
  }
  
  const reportData = {
    questionNumber: state.currentQuestion + 1,
    question: question.q,
    currentCorrectAnswer: question.c.map(idx => question.o[idx]).join(', '),
    userFeedback: feedback,
    studentName: state.userName
  };
  
  console.log('=== REPORT SUBMITTED ===');
  console.log('Question #:', reportData.questionNumber);
  console.log('Question:', reportData.question);
  console.log('Current Correct Answer:', reportData.currentCorrectAnswer);
  console.log('User Feedback:', reportData.userFeedback);
  console.log('Submitted by:', reportData.studentName);
  console.log('========================');
  
  alert(`Report submitted successfully!\n\nQuestion #${reportData.questionNumber}\nYour feedback: "${feedback}"\n\nThis has been logged to the console.`);
  
  closeReportModal();
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}