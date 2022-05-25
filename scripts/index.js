import weeks from "../mocks/data.json" assert { type: "json" };
const monday = document.querySelector(".spending__mon-day");
const tuesday = document.querySelector(".spending__tue-day");
const wednesday = document.querySelector(".spending__wed-day");
const thursday = document.querySelector(".spending__thu-day");
const friday = document.querySelector(".spending__fri-day");
const saturday = document.querySelector(".spending__sat-day");
const sunday = document.querySelector(".spending__sun-day");

class PriceWeek {
  constructor(day) {
    this.day = day;
  }

  Monday() {
    if (this.day === "monday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      monday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "mon") span.innerText = `${days.amount}`;
      });
    }
  }

  Tuesday() {
    if (this.day === "tuesday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      tuesday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "tue") span.innerText = `${days.amount}`;
      });
    }
  }

  Wednesday() {
    if (this.day === "wednesday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      wednesday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "wed") span.innerText = `${days.amount}`;
      });
    }
  }

  Thursday() {
    if (this.day === "thursday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      thursday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "thu") span.innerText = `${days.amount}`;
      });
    }
  }

  Friday() {
    if (this.day === "friday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      friday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "fri") span.innerText = `${days.amount}`;
      });
    }
  }

  Saturday() {
    if (this.day === "saturday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      saturday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "sat") span.innerText = `${days.amount}`;
      });
    }
  }

  Sunday() {
    if (this.day === "sunday") {
      let span = document.createElement("span");
      span.setAttribute("class", `${this.day}`);
      sunday.appendChild(span);

      weeks.map((days) => {
        if (days.day === "sun") span.innerText = `${days.amount}`;
      });
    }
  }
}

const oneDay = new PriceWeek("monday");
oneDay.Monday();

const secondDay = new PriceWeek("tuesday");
secondDay.Tuesday();

const thirdDay = new PriceWeek("wednesday");
thirdDay.Wednesday();

const fourthDay = new PriceWeek("thursday");
fourthDay.Thursday();

const fifthDay = new PriceWeek("friday");
fifthDay.Friday();

const sixthDay = new PriceWeek("saturday");
sixthDay.Saturday();

const seventhDay = new PriceWeek("sunday");
seventhDay.Sunday();

class DaysOfTheWeek {
  HighlightOfTheWeek() {
    let date = new Date().getDay();

    switch (date) {
      case 1:
        monday.style.background = "hsl(186, 34%, 60%)";
        break;
      case 2:
        tuesday.style.background = "hsl(186, 34%, 60%)";
        break;
      case 3:
        wednesday.style.background = "hsl(186, 34%, 60%)";
        break;
      case 4:
        thursday.style.background = "hsl(186, 34%, 60%)";
        break;
      case 5:
        friday.style.background = "hsl(186, 34%, 60%)";
        break;
      case 6:
        saturday.style.background = "hsl(186, 34%, 60%)";
        break;
      case 7:
        sunday.style.background = "hsl(186, 34%, 60%)";
        break;
    }
  }
}

const day = new DaysOfTheWeek();
day.HighlightOfTheWeek();
