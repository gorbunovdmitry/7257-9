const app = document.getElementById('app');

/** Номер варианта (как в папке 7257-N) */
const VARIANT = '9';

function sendAnalyticsEvent(gaEvent, ymEvent) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', gaEvent);
  }
  if (typeof window.ym === 'function') {
    window.ym(96171108, 'reachGoal', ymEvent);
  }
}

function renderLanding() {
  if (!sessionStorage.getItem(`landingViewed_var${VARIANT}`)) {
    sendAnalyticsEvent(`7257_page_view_var${VARIANT}`, `7257_page_view_var${VARIANT}`);
    sessionStorage.setItem(`landingViewed_var${VARIANT}`, '1');
  }
  if (localStorage.getItem(`7257_placeholderShown_var${VARIANT}`) === '1') {
    renderPlaceholder();
    return;
  }
  app.innerHTML = `
    <div class="page">
      <header class="hero">
        <img src="img/Image.png" alt="" class="hero__visual" width="650" height="650" decoding="async" />
        <h1 class="hero__title">Деньги под залог золота</h1>
        <p class="hero__lead">
          Получите деньги на срок до 30 дней. Сумма зависит от оценки золота по рыночной стоимости
        </p>
      </header>

      <section class="benefits" aria-label="Преимущества">
        <div class="benefits__row">
          <div class="benefits__icon" aria-hidden="true">
            <img src="img/6.png" alt="" class="benefits__icon-img" width="80" height="96" decoding="async" />
          </div>
          <p class="benefits__text">Не влияет на кредитную историю</p>
        </div>
        <div class="benefits__row">
          <div class="benefits__icon" aria-hidden="true">
            <img src="img/Subtract.png" alt="" class="benefits__icon-img" width="96" height="96" decoding="async" />
          </div>
          <p class="benefits__text">
            Хорошая история взаимодействия может учитываться при рассмотрении кредитных продуктов Альфа-Банка
          </p>
        </div>
      </section>

      <section class="conditions" aria-labelledby="conditions-heading">
        <h2 id="conditions-heading" class="section-title">Условия</h2>
        <ul class="conditions__list">
          <li>Срок — 30 дней с возможностью продления</li>
          <li>Ставка — от 0,2% или 6% в месяц. Это примерно 60 р в месяц с каждой 1 000 р</li>
          <li>Сумма — до 75% от рыночной стоимости золота. До 8 500 р за 1 грамм (999)</li>
          <li>Если в изделии есть драгоценные камни, то их оценка производится отдельно</li>
        </ul>
      </section>

      <section class="how" aria-labelledby="how-heading">
        <h2 id="how-heading" class="section-title">Как это работает</h2>
        <ol class="how__steps">
          <li class="how__step">
            <div class="how__icon" aria-hidden="true">
              <img src="img/image1.png" alt="" class="how__badge" width="96" height="96" decoding="async" />
            </div>
            <div class="how__text">
              <p class="how__step-title">Оставляете заявку</p>
              <p class="how__step-desc">Это займет всего пару минут</p>
            </div>
          </li>
          <li class="how__step">
            <div class="how__icon" aria-hidden="true">
              <img src="img/image2.png" alt="" class="how__badge" width="96" height="96" decoding="async" />
            </div>
            <div class="how__text">
              <p class="how__step-title">Получаете условия</p>
              <p class="how__step-desc">Сообщаем предварительную сумму и ставку</p>
            </div>
          </li>
          <li class="how__step">
            <div class="how__icon" aria-hidden="true">
              <img src="img/image3.png" alt="" class="how__badge" width="96" height="96" decoding="async" />
            </div>
            <div class="how__text">
              <p class="how__step-title">Приходите в отделение</p>
              <p class="how__step-desc">Нужно приехать с золотым изделием для проверки и оценки</p>
            </div>
          </li>
          <li class="how__step">
            <div class="how__icon" aria-hidden="true">
              <img src="img/image4.png" alt="" class="how__badge" width="96" height="96" decoding="async" />
            </div>
            <div class="how__text">
              <p class="how__step-title">Получаете деньги</p>
              <p class="how__step-desc">Оформляем займ на срок до 30 дней с возможностью продления. Вы сможете получить деньги любым удобным способом — на карту или наличными</p>
            </div>
          </li>
        </ol>
      </section>

      <div class="page__footer">
        <button type="button" class="cta" id="sendBtn">Оставить заявку</button>
      </div>
    </div>
  `;
  document.getElementById('sendBtn').onclick = () => {
    sendAnalyticsEvent(`7257_click_continue_var${VARIANT}`, `7257_click_continue_var${VARIANT}`);
    localStorage.setItem(`7257_placeholderShown_var${VARIANT}`, '1');
    renderPlaceholder();
    history.replaceState(null, '', location.href);
  };
}

function renderPlaceholder() {
  if (!sessionStorage.getItem(`endPageViewed_var${VARIANT}`)) {
    sendAnalyticsEvent(`7257_end_page_view_var${VARIANT}`, `7257_end_page_view_var${VARIANT}`);
    sessionStorage.setItem(`endPageViewed_var${VARIANT}`, '1');
  }
  app.innerHTML = `
    <div class="placeholder">
      <img src="img/moai.png" alt="" class="placeholder__img" width="220" height="220" decoding="async" />
      <div class="placeholder__title">Сервис ещё в работе</div>
      <div class="placeholder__desc">
        Мы выбираем лучшие условия, чтобы вам точно понравилось. С нетерпением ждём, когда всё заработает, чтобы показать вам.
      </div>
    </div>
  `;
  history.replaceState(null, '', location.href);
}

renderLanding();
