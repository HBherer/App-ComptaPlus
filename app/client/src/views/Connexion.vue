<template>
  <section class="ContainerFlexLogPage">
    <article class="SubContainer">
      <h1 class="LogoLogPage w100">Compta+</h1>
      <form action="/dashboard" method="GET">
        <label for="LogPageEmail">Adresse courriel</label>
        <input
          type="email"
          id="LogPageEmail"
          class=""
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
        Vous n'avez pas encore de compte? <a href="#"> S'inscrire</a>
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

<script>
// @ is an alias to /src
</script>

<style>
.ContainerFlexLogPage {
  display: flex;
}
.SubContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 40%;
  margin-top: 10%;
}
.SubContainerR {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  height: 100vh;
  background-color: #1a1a1a;
  box-shadow: 0px 3px 6px #00000029;
}
.LogoLogPage {
  font-size: 3rem;
  color: #b4e364;
  font-weight: bold;
  text-align: center;
}
form {
  width: 72%;
}
label {
  font-size: 1.3rem;
  font-weight: bold;
  text-align: left;
}
input {
  width: 100%;
  height: 15%;
  font-size: 1.2rem;
  margin: 15px 0px 30px 0px;
}
button {
  width: 105%;
  height: 18%;
}
.LogUn {
  margin-top: 29vh;
  font-size: 16px;
}
a {
  font-weight: bold;
  color: #b4e364;
}
a:hover {
  color: #5db4ea;
}
.SizeImgLogPage {
  width: 100vh;
  height: 72%;
}
img {
  text-align: center;
  width: 100%;
  height: 100%;
}
.InfoSect {
  background-color: #b4e364;
  color: #121212;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 28vh;
}
h2 {
  width: 100%;
  margin-top: 27px;
  height: 0px;
}
.ParaInfo {
  width: 100%;
  margin-top: -20px;
}
.p2 {
  margin-top: -60px;
}
/* Media querry*/
@media screen and (max-width: 768px) {
  .SubContainer {
    width: 50%;
    z-index: 1;
  }
  .LogUn {
    margin-top: 28vh;
    font-size: 14px;
  }
  .SubContainerR {
    width: 50%;
  }
  .SizeImgLogPage {
    width: 100%;
  }
  h2 {
    font-size: 1.2rem;
  }
  .ParaInfo {
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
  }
  .p2 {
    margin-top: -40px;
  }
}
@media screen and (max-width: 576px) {
  .ContainerFlexLogPage {
    display: block;
  }
  .SubContainer {
    width: 100%;
  }
  .SubContainerR {
    display: none;
  }
  .LogUn {
    margin-top: 15vh;
    font-size: 14px;
  }
}
@media screen and (max-width: 290px) {
  .ContainerFlexLogPage {
    display: block;
  }
  .SubContainer {
    width: 100%;
  }
  .SubContainerR {
    display: none;
  }
  .LogUn {
    margin-top: 15vh;
    font-size: 12px;
  }
}
</style>