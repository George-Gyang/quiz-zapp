<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import firebaseConfigApp from "../../src/firebase.config";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

firebaseConfigApp;

// const googleLogin = "lorem";
let userName = ref("");
let isSignIn = ref(false);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   console.log(result);
      userName.value = result.user.displayName;
      isSignIn.value = true;
      //   console.log(userName)
      //   console.log(isSignIn)
    })
    .catch((error) => {
      //   console.log(error);
    });
};
const googleSignOut = () => {
  signOut(auth)
    .then(() => {
      userName.value = "";
      isSignIn.value = false;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
user

<template>
  <div>
    <div class="card cards">
      <h4 class="card-title mb-5">Google Sign in</h4>
      <h1 v-if="userName">Welcome Mr {{ userName }}</h1>
      <div v-if="isSignIn" class="">
        <div class="">
          <button @click="googleSignOut" class="btn btn-primary btn-">
            log out
          </button>
        </div>
        <div class="">
          <RouterLink to="/home">Continue to sign in</RouterLink>
        </div>
      </div>
      <div v-if="!isSignIn" class="">
        <div class="">
          <button @click="handleGoogleSignIn" class="btn btn-primary btn-">
            sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cards {
  max-width: 400px;
  margin: auto;
  min-height: 400px;
  padding: 2rem;
}
</style>
