<script setup>
import { ref } from "vue";
import Home from "./Home.vue";
import { Icon } from '@iconify/vue';

import { RouterLink } from "vue-router";

import firebaseConfigApp from "../../src/firebase.config";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

firebaseConfigApp;

// const googleLogin = "lorem";
// const display = false
let userName = ref("");
let isSignIn = ref(false);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      //   console.log(result);
      userName.value = result.user.displayName;
      isSignIn.value = true;
    })
    .catch((error) => {
      //   console.log(error);
    });
};
// console.log(userName.value)
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

// TEITTER AUTHENTIFICATION
const twitterProvider = new TwitterAuthProvider();

const handleTwitterSignIn = () => {
  signInWithPopup(auth, twitterProvider)
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
const twitterSignOut = () => {
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

<template>
  <div class="container">
    <div class="card mt-5 cards">
      <h4 class="card-title mb-4 text-center fst-italic text-info">
        sign in with your Account
      </h4>
      <h1 class="fs-4 mb-3" v-if="userName">
        Welcome <br />
        {{ userName }}
      </h1>
      <div v-if="isSignIn" class="">
        <div class="">
          <div class="d-grid gap-2 mb-3">
            <button
              @click="googleSignOut"
              class="btn btn-outline-danger"
              type="button"
            >
              log out
            </button>
          </div>
        </div>
        <div class="">
          <RouterLink to="/home">Continue to sign in</RouterLink>
        </div>
      </div>
      <div v-if="!isSignIn" class="">
        <div class="">
          <div class="d-grid gap-2 mb-3">
            <button
              @click="handleGoogleSignIn"
              class="btn btn-outline-secondary"
              type="button"
            >
            <Icon icon="devicon:google" width="20" />
              <span class="ms-2" >Sign in with google</span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="!isSignIn" class="">
        <div class="">
          <div class="d-grid gap-2">
            <button
              @click="handleTwitterSignIn"
              class="btn btn-outline-secondary"
              type="button"
            >
              <Icon icon="devicon:twitter" width="25" />
             <span class="ms-2" > Sign in with twitter</span>
            </button>
          </div>
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
