<template>
  <section class="ContainerFlexLogPage">
    <article class="SubContainer">
      <h1 class="LogoLogPage w100">Compta+</h1>
      <form class="LogPageForm" action="/dashboard" method="GET">
        <label for="LogPageEmail">Adresse courriel</label>
        <input
          type="email"
          id="LogPageEmail"
          class
          name="email"
          placeholder="ex: jameswebb@gmail.com"
          alt="Courriel connexion"
        />
        <label for="LogPagePassword">Mot de passe</label>
        <input
          type="password"
          id="LogPagePassword"
          name="password"
          placeholder="********"
          alt="Mot passe"
        />
        <button type="submit">Connexion</button>
      </form>
      <p class="LogUn">
        Vous n'avez pas encore de compte?
        <router-link to="subscribe" class="aLinkSub">S'inscrire</router-link>
      </p>
    </article>
    <article class="SubContainerR">
      <div class="SizeImgLogPage">
        <img src="/img/sliderConnexion/ImgeSliderFirst.svg" alt="Image" />
      </div>
      <div class="InfoSect">
        <h2>Votre application web de Comptabilité</h2>
        <p class="ParaInfo">
          Enfin une application web pour votre comptabilité qui est belle!
        </p>
        <p class="ParaInfo p2">
          Interface simple et complet conçu par vous, pour vous.
        </p>
      </div>
    </article>
  </section>
</template>