<template>
  <section class="ContainerFlexLogPage">
    <article class="SubContainer">
      <h1 class="LogoLogPage w100">Compta+</h1>
      <form action="">
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
</style>