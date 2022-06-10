function howManyHoursOfTraining() {
  let workTime = {
    '21.11': 6,
    '22.11': 4,
    '23.11': 4,
    '24.11': 3,
    '25.11': 7,
    '26.11': 7,
    '27.11': 5,
    '28.11': 9,
    '29.11': 7,
    '30.11': 7,
    '01.12': 6,
    '02.12': 5,
    '03.12': 6,
    '04.12': 3,
    '05.12': 6,
    '06.12': 3,
    '07.12': 7,
    '08.12': 7,
    '09.12': 6,
    '10.12': 5,
    '11.12': 4,
    '12.12': 6,
    '13.12': 6,
    '14.12': 1,
    '15.12': 7,
    '16.12': 4,
    '17.12': 5,
    '18.12': 5,
    '19.12': 1,
    '20.12': 4,
    '21.12': 6,
    '22.12': 7,
    '23.12': 5,
    '24.12': 6,
    '24.12': 2,
    '25.12': 0,
    '27.12': 11,
    '28.12': 4,
    '29.12': 8,
    '30.12': 5,
    '31.12': 4,
    '01.01': 7,
    '02.01': 5,
    '03.01': 7,
    '04.01': 9,
    '05.01': 7,
    '06.01': 6,
    '07.01': 2,
    '08.01': 8,
    '09.01': 9,
    '10.01': 5,
    '11.01': 6,
    '12.01': 7,
    '13.01': 6,
    '14.01': 8,
    '15.01': 5,
    '16.01': 7,
    '17.01': 4,
    '18.01': 5,
    '19.01': 6,
    '20.01': 3,
    '21.01': 5,
    '22.01': 7,
    '23.01': 6,
    '24.01': 8,
    '25.01': 9,
    '26.01': 6,
    '27.01': 4,
    '28.01': 6,
    '29.01': 6,
    '30.01': 6,
    '31.01': 5,
    '01.02': 7,
    '02.02': 6,
    '03.02': 5,
    '04.02': 8,
    '05.02': 7,
    '06.02': 6,
    '07.02': 5,
    '08.02': 5,
    '09.02': 7,
    '10.02': 7,
    '11.02': 8,
    '12.02': 5,
    '13.02': 4,
    '14.02': 5,
    '15.02': 4,
    '16.02': 3,
    '17.02': 2,
    '18.02': 4,
    '19.02': 5,
    '20.02': 6,
    '21.02': 1,
    '22.02': 1,
    '23.02': 3,
    '24.02': 0,
    '25.02': 1,
    '26.02': 1,
    '27.02': 1,
    '28.02': 2,
    '01.03': 2,
    '02.03': 1,
    '03.03': 2,
    '04.03': 1,
    '05.03': 4,
    '06.03': 5,
    '07.03': 2,
    '08.03': 2,
    '09.03': 4,
    '10.03': 4,
    '11.03': 4,
    '12.03': 5,
    '13.03': 7,
    '14.03': 9,
    '15.03': 8,
    '16.03': 8,
    '17.03': 7,
    '18.03': 4,
    '19.03': 9,
    '20.03': 8,
    '21.03': 10,
    '22.03': 10,
    '23.03': 9,
    '24.03': 8,
    '25.03': 5,
    '26.03': 7,
    '27.03': 6,
    '28.03': 6,
    '29.03': 7,
    '30.03': 6,
    '01.04': 8,
    '02.04': 3,
    '03.04': 7,
    '04.04': 3,
    '05.04': 7,
    '06.04': 7,
    '07.04': 7,
    '08.04': 5,
    '09.04': 7,
    '10.04': 3,
    '11.04': 6,
    '12.04': 3,
    '13.04': 7,
    '14.04': 7,
    '15.04': 7,
    '16.04': 7,
    '17.04': 5,
    '18.04': 3,
    '19.04': 6,
    '20.04': 10,
    '21.04': 9,
    '22.04': 8,
    '23.04': 9,
    '24.04': 10,
    '25.04': 9,
    '26.04': 7,
    '27.04': 6,
    '28.04': 7,
    '29.04': 4,
    '30.04': 2,
    '01.04': 6,
    '02.04': 7,
    '03.04': 6,
    '04.04': 7,
    '05.04': 7,
    '06.04': 11,
    '07.04': 7,
    '08.04': 6,
    '09.04': 2,
    '10.04': 5,
    '11.04': 6,
    '12.04': 4,
    '13.04': 1,
    '14.04': 6,
    '15.04': 7,
    '16.04': 5,
    '17.04': 6,
    '18.04': 7,
    '19.04': 3,
    '20.04': 4,
    '21.04': 1,
    '22.04': 5,
    '23.04': 7,
    '24.04': 8,
    '25.04': 5,
    '26.04': 1,
    '27.04': 5,
    '28.04': 1,
    '29.04': 3,
    '30.04': 2,
    '31.04': 1,
    '01.05': 2,
    '02.05': 5,
    '03.05': 5,
    '04.05': 7,
    '05.05': 4,
    '06.05': 6,
    '07.05': 5,
    '08.05': 5,
    '09.05': 6,
    '10.05': 9,
  };
  let allHourWorkTime = Object.values(workTime).reduce((previous, item) => item + previous);
  let workTimeArray = Object.values(workTime);
  return `${allHourWorkTime} hour learning.
${(allHourWorkTime / workTimeArray.length).toFixed(1)} hours a day. Count day: ${workTimeArray.length}`;
}
console.log(howManyHoursOfTraining());
