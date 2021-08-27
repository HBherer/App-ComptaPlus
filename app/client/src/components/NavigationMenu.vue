<template>
  <section class="bgNav">
    <article>
      <div class="Logo" to="/">C+</div>
    </article>
    <nav class="navApp">
      <ul>
        <li>
          <router-link class="aColorNav" to="dashboard"
            ><svg
              id="dashboard"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>127 home</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"
                />
              </g></svg
            ><span id="dashboardSVG" class="underLineNav">Tableau de bord</span>
          </router-link>
        </li>
        <li>
          <router-link class="aColorNav" to="transaction"
            ><svg
              id="transaction"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>114 dollar</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M19,8V7.068A5.073,5.073,0,0,0,13.932,2H13V0H11V2h-.932a5.068,5.068,0,0,0-1.6,9.875L11,12.72V20h-.932A3.071,3.071,0,0,1,7,16.932V16H5v.932A5.073,5.073,0,0,0,10.068,22H11v2h2V22h.932a5.068,5.068,0,0,0,1.6-9.875L13,11.28V4h.932A3.071,3.071,0,0,1,17,7.068V8Zm-4.1,6.021A3.068,3.068,0,0,1,13.932,20H13V13.387ZM11,10.613,9.1,9.979A3.068,3.068,0,0,1,10.068,4H11Z"
                />
              </g></svg
            ><span id="transactionSVG" class="underLineNav"
              >Transaction</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="bank-account"
            ><svg
              id="bankaccount"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M0,22H24v2H0ZM24,7.909V10H21v8h2v2H1V18H3V10H0V7.909A3,3,0,0,1,1.563,5.275l9-4.909a2.993,2.993,0,0,1,2.874,0l9,4.909A3,3,0,0,1,24,7.909ZM5,18H8V10H5Zm5-8v8h4V10Zm9,0H16v8h3Zm3-2.091a1,1,0,0,0-.521-.878l-9-4.909a1,1,0,0,0-.958,0l-9,4.909A1,1,0,0,0,2,7.909V8H22Z"
              /></svg
            ><span id="bankaccountSVG" class="underLineNav"
              >Compte Banque</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="invoice"
            ><svg
              id="invoice"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>107 receipt</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M21,23.9l-3.663-2.511-2.664,1.825-2.666-1.826L9.341,23.212,6.67,21.386,3,23.9V3A3,3,0,0,1,6,0H18a3,3,0,0,1,3,3ZM6.67,18.962l2.67,1.826,2.667-1.826,2.666,1.826,2.665-1.827L19,20.1V3a1,1,0,0,0-1-1H6A1,1,0,0,0,5,3V20.1Z"
                />
                <rect x="7" y="8" width="10" height="2" />
                <rect x="7" y="12" width="8" height="2" />
              </g></svg
            ><span id="invoiceSVG" class="underLineNav"
              >Facture</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="statistic"
            ><svg
              id="statistic"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>116 stats</title>
              <g id="_01_align_center" data-name="01 align center">
                <path d="M24,24H3a3,3,0,0,1-3-3V0H2V21a1,1,0,0,0,1,1H24Z" />
                <rect x="14" y="11" width="2" height="9" />
                <rect x="6" y="11" width="2" height="9" />
                <rect x="18" y="6" width="2" height="14" />
                <rect x="10" y="6" width="2" height="14" />
              </g></svg
            ><span id="statisticSVG" class="underLineNav"
              >Statistique</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="contact"
            ><svg
              id="contact"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>94 user</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"
                />
                <path
                  d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"
                />
              </g></svg
            ><span id="contactSVG" class="underLineNav"
              >Contact</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="configuration"
            ><svg
              id="configuration"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>143 filter</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M10.931,2.75a3.728,3.728,0,0,0-7.195,0H0v2H3.736a3.728,3.728,0,0,0,7.195,0H24v-2ZM7.333,5.5a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,5.5Z"
                />
                <path
                  d="M16.667,8.25A3.745,3.745,0,0,0,13.07,11H0v2H13.07a3.727,3.727,0,0,0,7.194,0H24V11H20.264A3.745,3.745,0,0,0,16.667,8.25Zm0,5.5A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"
                />
                <path
                  d="M7.333,16.5a3.745,3.745,0,0,0-3.6,2.75H0v2H3.736a3.728,3.728,0,0,0,7.195,0H24v-2H10.931A3.745,3.745,0,0,0,7.333,16.5Zm0,5.5a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"
                />
              </g></svg
            ><span id="configurationSVG" class="underLineNav"
              >Configuration</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="history"
            ><svg
              id="history"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>194 restore</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M12,0A12.03,12.03,0,0,0,4,3.078V0H2V5.143A1.859,1.859,0,0,0,3.857,7H9V5H4.879A9.985,9.985,0,1,1,2,12H0A12,12,0,1,0,12,0Z"
                />
                <polygon
                  points="11 7 11 12.414 14.293 15.707 15.707 14.293 13 11.586 13 7 11 7"
                />
              </g></svg
            ><span id="historySVG" class="underLineNav"
              >Historique</span
            ></router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="navApp StikDown">
      <ul>
        <li>
          <router-link class="aColorNav" to="profil"
            ><svg
              id="profil"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21,4H15V3A3,3,0,0,0,9,3V4H3A3,3,0,0,0,0,7V24H24V7A3,3,0,0,0,21,4ZM11,3a1,1,0,0,1,2,0V6H11ZM22,22H2V7A1,1,0,0,1,3,6H9V8h6V6h6a1,1,0,0,1,1,1ZM4,20h7V10H4Zm2-8H9v6H6Zm7,2h7v2H13Zm0-4h7v2H13Zm0,8h5v2H13Z"
              /></svg
            ><span id="profilSVG" class="underLineNav"
              >Profil</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="aColorNav" to="setting"
            ><svg
              id="setting"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>135 settings</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                />
              </g></svg
            ><span id="settingSVG" class="underLineNav"
              >Paramètre</span
            ></router-link
          >
        </li>
        <li>
          <router-link class="LogOutNavColor" to="connection"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>191 log out</title>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M2,21V3A1,1,0,0,1,3,2H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V22H3A1,1,0,0,1,2,21Z"
                />
                <path
                  d="M23.123,9.879,18.537,5.293,17.123,6.707l4.264,4.264L5,11l0,2,16.443-.029-4.322,4.322,1.414,1.414,4.586-4.586A3,3,0,0,0,23.123,9.879Z"
                />
              </g></svg
            ><span class="underLineNavLogOut">Déconnexion</span></router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "navmenu",
};
</script>

<style>
.underLineNav:hover {
  border-bottom: solid 2px #b4e364;
}
.underLineNavLogOut:hover {
  border-bottom: solid 2px #ff595e;
}
.Logo {
  font-size: 56px;
  font-weight: bold;
  color: #b4e364;
  align-self: flex-end;
  margin-top: 25%;
}
.bgNav {
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 170px;
  height: 100vh;
}
.StikDown {
  align-self: flex-end;
}
.StikDown > ul{
  margin-bottom: 0px;
}
ul {
  list-style-type: none;
}
.navApp {
}
.navApp > ul > li > a {
  font-weight: bold;
  font-size: 0.87rem;
  text-decoration: none;
  color: #ffffff;
  fill: #ffffff;
}
.aColorNav:hover {
  color: #b4e364;
  fill: #b4e364;
}
.LogOutNavColor:hover {
  color: #ff595e;
  fill: #ff595e;
}
.navApp > ul > li {
  margin: 1.87rem 0rem;
}
.navApp > ul {
  padding: 10px;
}
.select {
  fill: #b4e364;
}
.selectLine {
  color: #b4e364;
  border-bottom: solid 2px #b4e364;
}
svg {
  width: 1.5rem;
  margin-right: 6px;
  margin-bottom: -5px;
}
</style>