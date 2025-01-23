(function() {
  const birthdayInput = document.getElementById('birthday'),
        resultP = document.getElementById('result');

  function onDateChange() {
    const administrations = [
      {
        president: 'Donald Trump',
        start: '2025-01-20',
        end: '2029-01-19'
      }, {
        president: 'Joe Biden',
        start: '2021-01-20',
        end: '2025-01-19'
      }, {
        president: 'Donald Trump',
        start: '2017-01-20',
        end: '2021-01-19'
      }, {
        president: 'Barack Obama',
        start: '2009-01-20',
        end: '2017-01-19'
      }, {
        president: 'George W. Bush',
        start: '2001-01-20',
        end: '2009-01-19'
      }, {
        president: 'Bill Clinton',
        start: '1993-01-20',
        end: '2001-01-19'
      }, {
        president: 'George H. W. Bush',
        start: '1989-01-20',
        end: '1993-01-19'
      }, {
        president: 'Ronald Reagan',
        start: '1981-01-20',
        end: '1989-01-19'
      }, {
        president: 'Jimmy Carter',
        start: '1977-01-20',
        end: '1981-01-19'
      }, {
        president: 'Gerald Ford',
        start: '1974-08-09',
        end: '1977-01-19'
      }, {
        president: 'Richard Nixon',
        start: '1969-01-20',
        end: '1974-08-08'
      }, {
        president: 'Lyndon B. Johnson',
        start: '1963-11-22',
        end: '1969-01-19'
      }, {
        president: 'John F. Kennedy',
        start: '1961-01-20',
        end: '1963-11-21'
      }
    ];

    var birthdayTime = new Date(this.value).getTime(),
        startTime,
        endTime;

    for (let i = 0; i < administrations.length; i++) {
      startTime = new Date(administrations[i].start).getTime(),
      endTime = new Date(administrations[i].end).getTime();

      if (birthdayTime >= startTime && birthdayTime <= endTime) {
        resultP.innerText = 'You are a child of the ' + administrations[i].president + ' administration!';
        break;
      }
    }
  }

  birthdayInput.max = new Date().toISOString().split('T')[0];  // Set to today's date
  birthdayInput.addEventListener('change', onDateChange);
})();
