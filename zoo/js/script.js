document.addEventListener("DOMContentLoaded", function () {
  const footerSlider = new Swiper('.partners', {
    slidesPerView: 2,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
      nextEl: '.js-partners-next',
      prevEl: '.js-partners-prev',
    },
    breakpoints: {
      1440: {
        slidesPerView: 6,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });

  new Swiper('.js-small-slider', {
    freeMode: true,
    slidesPerView: 1,
    breakpoints: {
      991: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 2.6,
      },
      560: {
        spaceBetween: 16,
        slidesPerView: 2.2,
      },
      480: {
        spaceBetween: 16,
        slidesPerView: 1.8,
      },
      320: {
        spaceBetween: 16,
        slidesPerView: 1.3,
      },
    },
    navigation: {
      nextEl: '.js-small-slider-next',
      prevEl: '.js-small-slider-prev',
    },
  });

  new Swiper('.js-main-slider', {
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.js-main-next',
      prevEl: '.js-main-prev',
    },
  });

  new Swiper('.js-animals-slider', {
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.js-animals-next',
      prevEl: '.js-animals-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 32,
        slidesPerView: 2,
      },
    },
  });

  new Swiper('.js-bottom-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.js-bottom-next',
      prevEl: '.js-bottom-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 32,
        slidesPerView: 2,
      },
    },
  });

  new Swiper('.js-custom-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.js-custom-next',
      prevEl: '.js-custom-prev',
    },
    breakpoints: {
      991: {
        spaceBetween: 0,
        slidesPerView: 'auto',
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });

  new Swiper('.js-page-slider', {
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.js-page-slider-next',
      prevEl: '.js-page-slider-prev',
    },
  });

  new Swiper('.js-person-slider', {
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.js-person-next',
      prevEl: '.js-person-prev',
    },
  });

  new Swiper('.js-advertisement-slider', {
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 6000,
    },
    spaceBetween: 4,
    navigation: {
      nextEl: '.js-advertisement-next',
      prevEl: '.js-advertisement-prev',
    },
  });

  new Swiper('.js-calendar-slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.js-calendar-next',
      prevEl: '.js-calendar-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 140,
      },
    },
  });

  const calendarTrigger = document.querySelector('.js-calendar-trigger');

  if (calendarTrigger) {
    calendarTrigger.addEventListener('click', function () {
      this.closest('.calendar-dropdown').classList.toggle('active');
    });
  };

  const newsSlider = new Swiper('.js-news-slider', {
    init: false,
    freeMode: true,
    slidesPerView: 1,
    breakpoints: {
      991: {
        spaceBetween: 16,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 2.6,
      },
      560: {
        spaceBetween: 16,
        slidesPerView: 2.2,
      },
      480: {
        spaceBetween: 16,
        slidesPerView: 1.8,
      },
      320: {
        spaceBetween: 16,
        slidesPerView: 1.3,
      },
    },
  });

  // Слайдер с текстом
  const sliderWithDesc = new Swiper('.js-slider-desc', {
    slidesPerView: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: '.js-content-tabs-next',
      prevEl: '.js-content-tabs-prev',
    },
    breakpoints: {
      991: {
        allowTouchMove: true,
      },
    },
  });

  // Адаптивная высота стрелок в слайдере с текстом
  if (document.querySelector('.swiper')) {
    if (Array.isArray(sliderWithDesc)) {
      sliderWithDesc.forEach(slider => {
        setTimeout(adaptiveSlider, 1000, slider.el);
        slider.on('slideChangeTransitionEnd', function () {
          adaptiveSlider(slider.el);
        });
      });
    } else {
      setTimeout(adaptiveSlider, 1000, sliderWithDesc.el);
      sliderWithDesc.on('slideChangeTransitionEnd', function () {
        adaptiveSlider(sliderWithDesc.el);
      });
    };

    function adaptiveSlider(slider) {
      if (typeof slider == 'object') {
        let activeSlide = slider.querySelector('.swiper-slide-active');
        if (!activeSlide) {
          activeSlide = slider.querySelector('.swiper-slide');
        }
        if (activeSlide) {
          let activeDesc = activeSlide.querySelector('.adaptive-item');
          let pagination = slider.querySelector('.content-tabs__pagination');
          pagination.style.top = activeDesc.clientHeight - pagination.clientHeight + 'px';
          pagination.style.opacity = '1';
        };
      };
    };
  };

  // Язык
  let lang = document.querySelector('.lang');
  let langDropdown = document.querySelector('.lang__drop');

  document.addEventListener('click', function (e) {
    let langChild = e.composedPath().includes(lang);

    if (!langChild) {
      langDropdown.style.height = '0px';
      lang.classList.remove('active');
      langDropdown.classList.remove('active');
    };
  });

  // Модалки
  let modalItem = document.querySelectorAll('.modal');

  if (!!modalItem.length) {
    // Делает отступ над модалкой и скрывает поиск в шапке
    function modalCalcPosition(modal) {
      let modalContainer = modal.querySelector('.modal__container');

      if (window.innerHeight >= modalContainer.clientHeight) {
        let topPosition = (window.innerHeight - modalContainer.clientHeight) / 2;
        modalContainer.style.top = topPosition + 'px';
      };

      let headerSearch = document.querySelector('.header-search');

      if (headerSearch.hasAttribute('style')) {
        headerSearch.removeAttribute('style');
      } else {
        headerSearch.style.display = 'none';
      };
    };

    MicroModal.init({
      onShow: modal => modalCalcPosition(modal),
      onClose: modal => modalCalcPosition(modal),
      disableScroll: true,
    });

    // Автоматический вызов
    if (document.querySelector('#workingTime')) {
      setTimeout(function () {
        MicroModal.show('workingTime', {
          disableScroll: true,
          onShow: modal => modalCalcPosition(modal),
          onClose: modal => modalCalcPosition(modal),
        });
        document.querySelector('#workingTime').querySelector('.modal__overlay').scrollTo(0, 0);
      }, 5000);
    };
  };

  // Календарь
  // Документация https://vanilla-calendar.frontend.uvarov.tech/ru/documentation/
  let currentDate = new Date();

  function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  };

  // Одиночный календарь
  let singleCalendarHtml = document.querySelector('.calendar');
  if (singleCalendarHtml) {
    let dates = singleCalendarHtml.dataset.dates;
    if (dates) {
      try {
        dates = dates.split(',');
        dates = dates.map(date => date.trim());
      } catch (error) {
        console.log(error);
      };
    };

    let holidays = singleCalendarHtml.dataset.holidays;
    if (holidays) {
      try {
        holidays = holidays.split(',');
        holidays = holidays.map(date => date.trim());
      } catch (error) {
        console.log(error);
      };
    };

    const singleCalendar = new VanillaCalendar(singleCalendarHtml, {
      type: 'default',
      settings: {
        lang: 'ru',
        range: {
          min: currentDate.getFullYear() + '-' + addLeadingZeros(currentDate.getMonth() + 1, 2) + '-' + addLeadingZeros(currentDate.getDate(), 2),
        },

        selection: {
          day: 'multiple',
        },

        selected: {
          month: currentDate.getMonth(),
          // Выбранные даты
          dates: dates,
          // Даты с событием
          holidays: holidays,
        },

        visibility: {
          weekNumbers: false,
          today: true,
          templateHeader: `
          %M 
          <svg>
            <use xlink:href="img/sprite.svg#chevron_down"></use>
          </svg>`,
        },
      },
      actions: {
        clickDay(e, dates) {
          alert(dates);
        },
        clickMonth(e, month) {
          // alert(dates);
        },
      },
    }).init();
  };

  // Календари в слайдере
  const calendarForm = document.querySelector('.js-calendar-form');
  let slideCalendar = document.querySelectorAll('.js-calendar');
  let calendarList = [];

  if (!!slideCalendar.length) {
    calendarForm.addEventListener('change', function (e) {
      const inputWeek = calendarForm.querySelector('[name=week]');
      const inputWeekend = calendarForm.querySelector('[name=weekend]');

      if (inputWeek && inputWeekend) {
        const curr = new Date(); // Получаем текущую дану
        const first = curr.getDate() - (curr.getDay() - 1); // Получаем первый день
        const last = first + 6; // Прибавляем неделю

        const monday = new Date(curr.setDate(first))
        // const tuesday =  new Date(curr.setDate(first + 1))
        // const wednesday =  new Date(curr.setDate(first + 2))
        // const thursday =  new Date(curr.setDate(first + 3))
        // const friday =  new Date(curr.setDate(first + 4))
        const saturday = new Date(curr.setDate(first + 5))
        const sunday = new Date(curr.setDate(last))

        function clearCalendar() {
          if (Array.isArray(calendarList)) {
            calendarList.forEach(calendarItem => {
              calendarItem.settings.selected.dates = [];
              calendarItem.update();
            });
          };
        };

        calendarList.forEach(function (calendarItem) {
          const calendarEl = calendarItem.HTMLElement;

          if (calendarEl) {
            let holidays = calendarEl.dataset.holidays;
            // let tempDates = dates;

            if (holidays) {
              try {
                holidays = holidays.split(',');
                holidays = holidays.map(date => new Date(date.trim()));

                const isWeek = inputWeek.checked;
                const isWeekend = inputWeekend.checked;

                if (isWeekend && !isWeek) {
                  holidays = calendarItem.HTMLElement.dataset.holidays;
                  if (!holidays) {
                    return false;
                  };

                  holidays = holidays.split(',');
                  holidays = holidays.map(date => new Date(date.trim()));

                  holidays = holidays.filter(date => {
                    return date.getDay() == 6 || date.getDay() == 0;
                  }).map(date => `${date.getFullYear()}-${addLeadingZeros(date.getMonth() + 1, 2)}-${addLeadingZeros(date.getDate(), 2)}`);

                  // calendarItem.settings.selected.dates = holidays;
                  // calendarItem.update();

                } else if (isWeek) {
                  let currentHolidays = currentCalendar.HTMLElement.dataset.holidays;
                  currentHolidays = currentHolidays.split(',');
                  currentHolidays = currentHolidays.map(date => new Date(date.trim()));

                  currentHolidays = currentHolidays.filter(date => {
                    date.setHours(0, 0, 0, 0);
                    monday.setHours(0, 0, 0, 0);
                    sunday.setHours(0, 0, 0, 0);
                    return date >= monday && date <= sunday;
                  }).map(date => `${date.getFullYear()}-${addLeadingZeros(date.getMonth() + 1, 2)}-${addLeadingZeros(date.getDate(), 2)}`);

                  clearCalendar();
                  currentCalendar.settings.selected.dates = currentHolidays;
                  currentCalendar.update();
                  return false;
                } else {
                  let defaultDates = calendarEl.dataset.dates;
                  if (defaultDates) {
                    defaultDates = defaultDates.split(',');
                    holidays = defaultDates.map(date => date.trim());
                  };
                };

                calendarItem.settings.selected.dates = holidays;
                calendarItem.update();

              } catch (error) {
                console.log(error);
              };
            };
          };
        });
      };
    });

    let currentCalendar = null;

    slideCalendar.forEach(calendar => {
      let currentMonth = currentDate.getMonth();
      let calendarMonth = calendar.dataset.month;
      let currentYear = currentDate.getFullYear();
      let calendarYear = calendar.dataset.year;

      if (calendarYear > currentYear || calendarMonth >= currentMonth && calendarYear <= currentYear) {
        let dates = calendar.dataset.dates;
        if (dates) {
          try {
            dates = dates.split(',');
            dates = dates.map(date => date.trim());
          } catch (error) {
            console.log(error);
          };
        };

        let holidays = calendar.dataset.holidays;
        if (holidays) {
          try {
            holidays = holidays.split(',');
            holidays = holidays.map(date => date.trim());
          } catch (error) {
            console.log(error);
          };
        };

        const calend = new VanillaCalendar(calendar, {
          settings: {
            lang: 'ru',
            selection: {
              year: false,
              month: false,
              time: false,
              day: 'multiple',
            },
            range: {
              min: currentDate.getFullYear() + '-' + addLeadingZeros(currentDate.getMonth() + 1, 2) + '-' + addLeadingZeros(currentDate.getDate(), 2),
            },
            selected: {
              year: currentDate.getFullYear(),
              month: parseInt(calendarMonth),
              // Выбранные даты
              dates: dates,
              // Даты с событием
              holidays: holidays,
            },
            visibility: {
              today: true,
            },
          },
          actions: {
            clickDay(e, dates) {
              alert(dates);
            },
          },
        });

        calend.init();
        calendarList.push(calend);

        if (currentYear == calendarYear && currentMonth == calendarMonth) {
          currentCalendar = calend;
        };

      } else {
        calendar.closest('.swiper-slide').remove();
      };
    });
  };

  // Шапка смена при скролле
  let scrollTop = 0;

  window.addEventListener('scroll', function () {
    let posY = window.scrollY;
    let header = document.querySelector('.header');
    let headerIndex = document.querySelector('.js-header-index');

    if (posY >= 100 && posY > scrollTop) {
      header.classList.add('out');
      searchInput.value = '';
      showSearchResults();
      searchHeader.classList.remove('active');
    } else {
      header.classList.remove('out');
    };

    if (headerIndex) {
      if (posY >= 100) {
        headerIndex.classList.remove('header-index');
      } else {
        headerIndex.classList.add('header-index');
      }
    };

    if (window.innerWidth >= 1040) {
      if (posY >= 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      };
    }
    scrollTop = posY;

    langDropdown.style.height = '0px';
    lang.classList.remove('active');
    langDropdown.classList.remove('active');
  });

  // Поиск в шапке
  let searchHeader = document.querySelector('.header-search');
  let searchTrigger = document.querySelector('.header__btn-search');
  let searchInput = document.querySelector('.header-search__input');

  if (searchTrigger) {
    searchTrigger.addEventListener('click', () => {
      searchHeader.classList.add('active');
    });

    document.addEventListener('click', function (e) {
      let searchTriggerChild = e.composedPath().includes(searchTrigger);
      let withinBoundaries = e.composedPath().includes(searchHeader);

      if (!withinBoundaries && !searchTriggerChild) {
        searchHeader.classList.remove('active');
      };
    });

    // Отображение блока с результатами поиска
    searchInput.addEventListener('input', showSearchResults);

    function showSearchResults() {
      if (searchInput.value != '') {
        searchHeader.classList.add('active-results');
      } else {
        searchHeader.classList.remove('active-results');
      };
    };
  };

  // Видео https://github.com/sampotts/plyr
  // rus https://atuin.ru/blog/media-plejer-plyr-dlya-html5-youtube-i-vimeo/

  if (document.querySelector('.player')) {
    let playerVideo = Plyr.setup('.player', {
      clickToPlay: true,
      youtube: {
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3,
      },
    });

    playerVideo.forEach(video => {
      video.on('seeking', function () {
        video.play();
      });

      video.on('play', function () {
        if (this.closest('.swiper')) {
          this.closest('.swiper').querySelector('.btn-circle__wrapper').classList.add('display-none');
        };
      });

      video.on('pause', function () {
        if (this.closest('.swiper')) {
          this.closest('.swiper').querySelector('.btn-circle__wrapper').classList.remove('display-none');
        };
      });
    });
  };

  if (document.querySelector('.js-player-audio')) {
    let playerAudio = Plyr.setup('.js-player-audio', {
      clickToPlay: true,
    });

    playerAudio.forEach(audio => {
      audio.on('seeking', function () {
        audio.play();
      });
    });
  };

  // Селекты https://www.cssscript.com/select-box-virtual-scroll/
  let filterSelect = document.querySelector('.filter__select');

  if (filterSelect) {
    VirtualSelect.init({
      ele: '.filter__select',
      search: false,
      disableSelectAll: true,
      hideClearButton: true,
      autoSelectFirstOption: false,
      optionsCount: 5,
      noOfDisplayValues: 1,
      moreText: 'Текст',
      selectAllText: 'Выбрать все',
      optionsSelectedText: 'свойства',
      optionSelectedText: 'свойство',
      allOptionsSelectedText: 'Все свойства',
    });
  };

  // Показать все фильтры
  let filterMoreBtn = document.querySelector('.filter__more');

  if (filterMoreBtn) {
    filterMoreBtn.addEventListener('click', function () {
      document.querySelector('.filter__wrapper').classList.toggle('active');
    });
  };

  // Табы
  let tabsBtns = document.querySelectorAll('.js-tab-btn');

  if (tabsBtns) {
    tabsBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        let id = this.getAttribute('data-tab');
        let content = document.querySelector('.js-tabs-item[data-tab="' + id + '"]');

        this.closest('.js-tab-btns').querySelector('.js-tab-btn.active').classList.remove('active');
        this.classList.add('active');

        this.closest('.js-tab-wrapper').querySelector('.js-tabs-item.active').classList.remove('active');
        content.classList.add('active');

        // Если в табах есть слайдер подгоняет стрелки
        let sliderWithDesc = document.querySelectorAll('.js-slider-desc');
        if (!!sliderWithDesc.length) {
          sliderWithDesc.forEach(slider => {
            slider.querySelector('.content-tabs__pagination').style.opacity = '0';
          });
          setTimeout(() => sliderWithDesc.forEach(adaptiveSlider), 100);
        };
      });
    });
  };

  // Slidetoggle
  function initDropdown() {
    let toggleWrapper = this.closest('.js-toggle-wrapper');
    let toggleContent = toggleWrapper.querySelector('.js-toggle-content');

    if (!toggleContent.classList.contains('active')) {
      toggleWrapper.classList.add('active');
      toggleContent.classList.add('active');
      toggleContent.style.height = 'auto';
      let height = toggleContent.clientHeight + 'px';
      toggleContent.style.height = '0px';
      setTimeout(function () {
        toggleContent.style.height = height;
      }, 0);
    } else {
      toggleContent.style.height = '0px';
      toggleWrapper.classList.remove('active');
      toggleContent.addEventListener('transitionend', function () {
        toggleContent.classList.remove('active');
      }, {
        once: true
      });
    };
  };

  function slideToggle() {
    let toggleTrigger = document.querySelectorAll('.js-toggle-trigger');

    toggleTrigger.forEach(trigger => {
      trigger.removeEventListener('click', initDropdown);
    });

    toggleTrigger.forEach(trigger => {
      trigger.addEventListener('click', initDropdown);
    });
  };

  // Inputmask https://github.com/RobinHerbots/Inputmask
  let inputTel = document.querySelectorAll('input[type="tel"]');

  if (inputTel) {
    new Inputmask("+7(999)999-99-99").mask(inputTel);
  };

  // Прикрепление файла
  let msgInput = document.querySelectorAll('.pin__input');

  if (msgInput) {
    msgInput.forEach(input => {
      let filesList = [];
      let bottom = input.closest('.pin');

      function checkFiles(bottom, files) {
        if (files.length != 0) {
          bottom.querySelector('.pin__attach').style.display = 'none';
        } else {
          bottom.querySelector('.pin__attach').style.display = 'block';
        };
      }

      function assignFiles(bottom, files) {
        const fileInput = bottom.querySelector('.submit-files');
        const dataTransfer = new DataTransfer();
        files.forEach(file => {
          dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;
      }

      function renderFileList(files, bottom) {
        let filesWrapper = bottom.querySelector('.pin__file-list');
        filesWrapper.innerHTML = '';

        checkFiles(bottom, filesList);

        //Проходимся по файлам
        for (let i = 0; i < files.length; i++) {
          let span = document.createElement('span');
          span.classList.add('pin__file');
          span.innerHTML = files[i].name;

          let removeBtn = document.createElement('button');
          removeBtn.setAttribute('type', 'button');
          removeBtn.classList.add('pin__file-remove-button');
          removeBtn.insertAdjacentHTML('beforeend', `
                    <svg class="pin__file-remove" fill="#91B93A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
                    </svg>
                `);

          function onRemoveButtonClick(e) {
            e.preventDefault();
            let fileHTML = this.closest('.pin__file');
            filesList = filesList.filter((f) => f.name !== files[i].name);
            fileHTML.remove();

            checkFiles(bottom, filesList);
            assignFiles(bottom, filesList);

            removeBtn.removeEventListener('click', onRemoveButtonClick)
          }

          removeBtn.addEventListener('click', onRemoveButtonClick)

          span.append(removeBtn);
          filesWrapper.append(span)
        };

        assignFiles(bottom, filesList);
      };

      input.addEventListener('click', (e) => {
        e.target.value = '';
      });

      input.addEventListener('change', (e) => {
        let files = e.target.files;

        Array.from(files).forEach(file => {
          let foundFile = filesList.find(f => f.name === file.name);
          if (!foundFile) {
            filesList.push(file);
          }
        });

        renderFileList(filesList, bottom);
      });
    });
  };

  // Бургер
  let burger = document.querySelector('.js-burger');
  let mainMenu = document.querySelector('.main-menu');
  let burgerClose = document.querySelector('.main-menu__close');

  if (burger) {
    burger.addEventListener('click', function () {
      mainMenu.classList.add('active');
    });

    burgerClose.addEventListener('click', function () {
      mainMenu.classList.remove('active');
    });
  };

  // Выпадающие пункты меню в мобильной версии
  let submenuTrigger = document.querySelectorAll('.menu__link')

  submenuTrigger.forEach(subTrigger => {
    let submenuItem = subTrigger.closest('.menu__item').querySelector('.submenu');
    let submenuArrow = subTrigger.closest('.menu__item').querySelector('.menu__link-arrow');

    subTrigger.addEventListener('click', function () {
      submenuItem.classList.toggle('active');
      submenuArrow.classList.toggle('active');
    });
  });

  // Ресайз
  let resize = function () {
    resizeFooter();

    if (document.querySelector('.js-about-title-link')) {
      resizeSectionAbout();
    };

    if (document.querySelector('.js-news-slider')) {
      if (window.innerWidth <= 991) {
        newsSlider.init();
      } else {
      };
    };

    if (document.querySelector('.back')) {
      resizeBackBtn();
    };

    if (document.querySelector('.js-adaptive-hashtag')) {
      resizeHashtag();
    };

    if (document.querySelector('.js-adaptive-drop-btn')) {
      resizeVacancyDropdown();
    };

    if (!!sliderWithDesc.length) {
      if (Array.isArray(sliderWithDesc)) {
        sliderWithDesc.forEach(slider => {
          adaptiveSlider(slider.el);
        });
      } else {
        adaptiveSlider(sliderWithDesc.el);
      };
    };

    if (document.querySelector('.news__shadow')) {
      resizeNewsItemShadow();
    };
  };

  resize();

  window.addEventListener('resize', resize);

  function resizeFooter() {
    let footerSliderArrows = document.querySelector('.footer').querySelector('.slider-arrows');
    let footerDropdown = document.querySelectorAll('.footer__col-item');

    if (window.innerWidth <= 1340) {
      footerSlider.el.querySelector('.swiper-wrapper').after(footerSliderArrows);
    } else {
      footerSlider.el.before(footerSliderArrows);
    };

    if (window.innerWidth <= 768) {
      footerDropdown.forEach(dropItem => {
        dropItem.classList.add('js-toggle-wrapper');
        dropItem.querySelector('.footer__title').classList.add('js-toggle-trigger');
        dropItem.querySelector('.footer__drop').classList.add('js-toggle-content');
      });
    } else {
      footerDropdown.forEach(dropItem => {
        dropItem.classList.remove('js-toggle-wrapper');
        dropItem.querySelector('.footer__title').classList.remove('js-toggle-trigger');
        dropItem.querySelector('.footer__drop').classList.remove('js-toggle-content');
        dropItem.querySelector('.footer__drop').removeAttribute('style');
      });
    };

    slideToggle();
  };

  function resizeSectionAbout() {
    let aboutTitleLink = document.querySelector('.js-about-title-link');
    let aboutTitle = aboutTitleLink.closest('.about').querySelector('.title');
    let aboutTitleVideo = aboutTitleLink.closest('.about').querySelector('.about__right');

    if (window.innerWidth <= 991) {
      aboutTitleVideo.after(aboutTitleLink);
    } else {
      aboutTitle.after(aboutTitleLink);
    };
  };

  function resizeBackBtn() {
    let backBtn = document.querySelector('.back');
    let mainContent = document.querySelector('.main-content');
    let asideBottom = document.querySelector('.aside__bottom');

    if (window.innerWidth <= 991) {
      mainContent.after(backBtn);
    } else {
      asideBottom.append(backBtn);
    };
  };

  function resizeHashtag() {
    let adaptiveHashtag = document.querySelector('.js-adaptive-hashtag');
    let asideTop = document.querySelector('.aside__top');
    let adaptiveHashtagAnchor = document.querySelector('.js-adaptive-hashtag-anchor');

    if (adaptiveHashtagAnchor) {
      if (window.innerWidth <= 991) {
        adaptiveHashtagAnchor.after(adaptiveHashtag);
      } else {
        asideTop.append(adaptiveHashtag);
      };
    };
  };

  function resizeVacancyDropdown() {
    let adaptiveDropdownBtn = document.querySelectorAll('.js-adaptive-drop-btn');

    adaptiveDropdownBtn.forEach(btn => {
      let dropdownBtnsWrapper = btn.closest('.dropdown').querySelector('.dropdown__btns');
      let dropdownContent = btn.closest('.dropdown').querySelector('.dropdown__content');

      if (window.innerWidth <= 991) {
        dropdownContent.append(btn);
      } else {
        dropdownBtnsWrapper.preppend(btn);
      };
    });
  };

  function resizeNewsItemShadow() {
    let newsItemShadow = document.querySelectorAll('.news__shadow');

    newsItemShadow.forEach(shadow => {
      let newsItemTop = shadow.closest('.news__top');

      if (window.innerWidth <= 768) {
        newsItemTop.after(shadow);
      } else {
        newsItemTop.append(shadow);
      };
    });
  };
});