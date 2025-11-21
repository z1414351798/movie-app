# 🎬 Movie Master

*A beautiful React Native movie browsing app built with Expo 52.*

## 🚀 Features

* Browse popular, top-rated, and upcoming movies
* Detailed movie info page
* Play trailers
* Google AdMob integration using `react-native-google-mobile-ads@14.11.0`
* Responsive UI
* Fast navigation

---

## 📦 Tech Stack


| Area       | Tech                                       |
| ---------- | ------------------------------------------ |
| Framework  | **Expo SDK 52**(React Native)              |
| Language   | JavaScript / TypeScript                    |
| Ads        | **react-native-google-mobile-ads@14.11.0** |
| Navigation | React Navigation                           |
| API        | TheMovieDB (TMDB)                          |
| Build      | EAS Build                                  |

---

## 🧰 Prerequisites

Before running the app, make sure you have:

* Node.js ≥ 18
* Expo CLI
* TMDB API Key
* Android SDK (for local Android builds)
* `jenv` for Java version switching (use Java 21):
  <pre class="overflow-visible!" data-start="1221" data-end="1250"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>jenv </span><span>local</span><span> 21
  </span></span></code></div></div></pre>

---

## 🔧 Installation

<pre class="overflow-visible!" data-start="1277" data-end="1396"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/your-username/react-native-movie-app.git
</span><span>cd</span><span> react-native-movie-app
npm install
</span></span></code></div></div></pre>

Set your environment files:

EXPO_PUBLIC_MOVIE_API_KEY=
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_ENDPOINT = "https://sgp.cloud.appwrite.io/v1"



---

## ▶️ Running the App

### Start Expo

<pre class="overflow-visible!" data-start="1615" data-end="1636"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm start
</span></span></code></div></div></pre>

### Run on iOS

<pre class="overflow-visible!" data-start="1653" data-end="1676"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run ios
</span></span></code></div></div></pre>

### Run on Android

<pre class="overflow-visible!" data-start="1697" data-end="1724"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run android
</span></span></code></div></div></pre>

---

## 📱 Google Mobile Ads (AdMob)

This project uses:

<pre class="overflow-visible!" data-start="1784" data-end="1830"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>react-native-google-mobile-ads</span><span>@14</span><span>.11.0
</span></span></code></div></div></pre>

### ✔ Expo SDK 52 Compatibility

* Expo SDK 52 is built on React Native 0.76
* `react-native-google-mobile-ads` 14.11.0 is compatible with RN 0.76
* No config plugin needed; Expo runs in **custom dev client / EAS build only**.

### Add to `app.json`

<pre class="overflow-visible!" data-start="2086" data-end="2279"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"plugins"</span><span>:</span><span> </span><span>[</span><span>
    </span><span>[</span><span>
      </span><span>"react-native-google-mobile-ads"</span><span>,</span><span>
      </span><span>{</span><span>
        </span><span>"android_app_id"</span><span>:</span><span> </span><span>"ca-app-pub-xxx~xxx"</span><span>,</span><span>
        </span><span>"ios_app_id"</span><span>:</span><span> </span><span>"ca-app-pub-xxx~xxx"</span><span>
      </span><span>}</span><span>
    </span><span>]</span><span>
  </span><span>]</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

---

## 🛠 Build with EAS

### Install EAS

<pre class="overflow-visible!" data-start="2324" data-end="2368"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g eas-cli
eas login
</span></span></code></div></div></pre>

### Configure EAS

<pre class="overflow-visible!" data-start="2388" data-end="2419"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>eas build:configure
</span></span></code></div></div></pre>

### Build Android

<pre class="overflow-visible!" data-start="2439" data-end="2471"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>eas build -p android
</span></span></code></div></div></pre>

### Build iOS

<pre class="overflow-visible!" data-start="2487" data-end="2515"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>eas build -p ios
</span></span></code></div></div></pre>

---

## 🎞 TMDB API

The app uses TMDB endpoints:

* `/movie/popular`
* `/movie/top_rated`
* `/movie/upcoming`
* `/movie/{id}` (details)
* `/movie/{id}/videos` (trailers)

Example API call:

<pre class="overflow-visible!" data-start="2708" data-end="2844"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>const</span><span> response = </span><span>await</span><span> </span><span>fetch</span><span>(
  </span><span>`https://api.themoviedb.org/3/movie/${id}</span><span>?api_key=</span><span>${process.env.EXPO_PUBLIC_MOVIE_API_KEY}</span><span>`
);
</span></span></code></div></div></pre>

---

## 🧩 Folder Structure

<pre class="overflow-visible!" data-start="2875" data-end="3180"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>react-native-movie-app/
├── app/                   </span><span># Expo Router pages</span><span>
├── components/            </span><span># UI components</span><span>
├── hooks/                 </span><span># Custom hooks</span><span>
├── screens/               </span><span># Screen components</span><span>
├── services/              </span><span># API calls</span><span>
├── assets/                </span><span># Images, fonts</span><span>
└── app.json
</span></span></code></div></div></pre>
