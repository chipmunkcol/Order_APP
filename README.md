๐ง๊ธฐ์ ์คํ <br/>
FE (JavaScript/ ContextAPI/ Styled-Components/ Firebase(Hosting) ) <br/>
BE (Serverless_Firebase(Auth, DB) )

# Restaurant ๋ฐฐ๋ฌ ์ดํ์๋๋ค :)

## ๐ฎ ์ฃผ์๊ธฐ๋ฅ
    - ์์ ์ฅ๋ฐ๊ตฌ๋์ ๋ด๊ธฐ(contextAPI)
    - ๋ก๊ทธ์ธ(firebase_Auth)
    - ์์๋ด์ญ ๊ฐ์ ธ์ค๊ธฐ(firebase_DB_realtime)
    - ์ฃผ๋ฌธํ๊ธฐ & ์ฃผ๋ฌธ๋ด์ญ(firebase_DB_fireStore)

##  ๐จ Styled
    - ํ๋ฒ๊ฑฐ ๋ฉ๋ด๋ฐ ๋ฑ ๋ฐ์ํ ์น(@media)
    - ์นดํธ ์ ๋๋ฉ์ด์(keyframes & useEffect)
    - ๋ก๊ทธ์ธ์ฌ์ฉ์ ๋ฉ๋ด(react-draggable)

## ๐ฆ ํธ๋ฌ๋ธ์ํ

<details> 

<summary>1.state </summary>

    ์ ํ๋ก์ ํธ๋ state ๊ด๋ฆฌ์ ๊ณต์ ๋ง์ด ๋ค์๋ค. ์ผ๋ถ๋ฌ props ๋๋ฆด๋ง๋ ํด๋ณด๊ณ  
    recoil๋ก ๊ด๋ฆฌ๋ ํด๋ดค๋ค๊ฐ ์๊ฐํด๋ณด๋ ๋ก๊ทธ์ธ์ด๋ ์ฅ๋ฐ๊ตฌ๋ state์ ๋๋ง ์ธ๊ฑด๋ฐ 
    contextAPI ์จ๋ ๋ ๊ฑฐ๊ฐ์์ context๋ก ๊ด๋ฆฌํ๋ค. docs์ ๋ง์ด ์ ๋ณํ๋ 
    state ๊ด๋ฆฌํ  ๋ ์ฐ๋ผ๊ณ ํด์ ์ข ๊ฑฑ์ ํ๋๋ฐ ์ ์ ๋๋ ์ธ์ดํ์๋ค.
    ๊ทธ๋ฆฌ๊ณ  ์๊ฐ๋ณด๋ค ๋๋ฅผ ๊ดด๋กญํ๋(?)๊ฑด ์ฅ๋ฐ๊ตฌ๋์ item ์ถ๊ฐํ๋๊ฑฐ์๋๋ฐ 
    item ๊ฐ ์๋์ ๋ฐ๋ณต๋ฌธ์ผ๋ก ๋ง๋  item ์ปดํฌ๋ํธ ์์์ useState(0)์ ๋ฃ๊ณ  ๊ด๋ฆฌํ๋ค๋ณด๋๊น 
    ์ฅ๋ฐ๊ตฌ๋์์ ์๋์ ์ถ๊ฐํ๊ฑฐ๋ ๋บ ๋ ๋ฐ๋ณต๋ฌธ item์ useState(0)๋ค์ด ๋ชจ๋ ๋๋๋ง๋ผ์ 
    ๋น ๋ฅด๊ฒ ์ถ๊ฐํ๊ฑฐ๋ ๋นผ๋ฉด ๋ฒ๊ทธ๊ฐ ๋ฐ์ํ๋ค. 
    useState(0)๋ฅผ item ๋ฐ๋ณต๋ฌธ ๋ฐ์ผ๋ก ๋นผ์ ์๋์ด ๋ณ๊ฒฝ๋ item๋ง ๋๋๋ง ์์ผ์ค์ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๋๋ฐ 
    ์๊ฑฐ ๋๋ฒ๊น ๊ณผ์ ์์ ๋๋๋ง์ ์ฐจ๋ถํ ๊ด์ฐฐํด ๋ณผ์ ์์๋ค. 
    (react devtools๋ก components์ profiler์ ์ปดํฌ๋ํธ ๋๋๋ง highlight ๊ด์ฐฐํ๋ฉด์ ๋๋ฒ๊นํ๋๋ฐ 
    ๋ญ ํ๋ค๊ฐ ์ค๊ฐ์ console๋ ์ฐ๊ธด ํ์ง๋ง..ใ ๋๋ฒ๊น ์ฐ์ต์ ๋๋ ํด๋ณผ์์์๋ค ๋๋ฒ๊น ๋ง์ด ํด๋ณด์ :) )
    
</details>

<details>

<summary>2.DataBase(DB)</summary>

    ์ ์ ๋ชฝ๊ณ ๋๋น ์จ๋ณด๊ธดํ๋๋ฐ ์ง์ง ๋ณ์๋ฆฌ๋ ์จ๋ด์ ๋๋์ด ์ ์์๋๋ฐ(์ง๊ธ๋ ๋ณ์๋ฆฌ๊ธดํจ), 
    ๋ฐฑ์๋๋ API ์ค๊ณํ๊ณ  AJAX ํต์ ํ์๋๋ ๋ ๋ค๋ฅธ ๋ง์ด์๋ค. 
    ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ค๊ณ๋ผ๋์ง ์ํด๋ด์ ์ฒ์์ ๋ถ๋ด์ด ์ข ์์๋๋ฐ Firebase๋ 
    ์ ์ด์ NoSQL์ด๋ผ(์คํค๋ง๊ฐ์์ด์) ์์ํ๊ธฐ๋ ์ข๊ณ  ํนํ ์ค์๊ฐ ๋๊ธฐํ๊ฐ ๋๋ฌด ์ข์์!
    ๋ฐ์ดํฐ๋ฒ ์ด์ค๊ฐ ๊ฐ์ด ๋ณํ๋ฉด ์๋ ค์ฃผ๋ ๊ธฐ๋ฅ์ด์์ด์ ๋ด์ฅ๋ ์ฝ๋ 
    onSnapshot & onAuthStateChanged ์จ์ ์ค์๊ฐ ์ฃผ๋ฌธํ ๋ด์ญ ๊ฐ์ง๊ณ ์ค๊ณ  ๋ก๊ทธ์ธ ๋ด์ญ ๊ฐ์ง๊ณ ์ค๋ ๋ฑ 
    ๊ทธ๋งํผ ์ฝ๋ ์ ๊ฒฝ์ ๋ ์ธ์์์๊ณ  ์ฌ์ฉ๋ฒ๋ ๊ต์ฅํ ๊ฐํธํ๋ค.  

    ํธ์ฌ์๋๊ธฐ๋ฅ๋ ์์ด์ ์ ์ ์๋๊ธฐ๋ฅ ๊ตฌํํ๋ ค๊ณ  sse์ผ๋๋ฐ ๋ค์์ ์ด๊ฑฐ ์จ๋ด์ผ์ง 

</details>

<details>

<summary>3.css</summary>

    ๋ ์ด์์ ๊ตฌ์ฑํ๋๊ฑฐ ์ข ์์ ๊ฐ์ด ๋ถ์๋ค๐ฑโ๐ css ํ๋ค๋ณด๋ฉด ์ข ์๊ฐ ์๊น๊ณ  ๊ทธ๋ฌ๋๋ฐ ์ต์ํด์ง๊ธฐ๋ํ๊ณ  
    animation ๋ญ ๋ฃ์์ง ๊ณ ๋ฏผํ๋๊ฒ ์๊ฐ๋ณด๋ค ์ ์ ํ๋ค.
    ๋ฐ์ํ ์น ์ํด๋ด์ ์ด๋ ค์ด๊ฑด์ค ์์๋๋ฐ ์๊ฐ๋ณด๋ค ์ฑ๊ฑฐ์ ๋ค. ๋ค์์ sass ์จ๋ด์ผ์ง

</details>
    
    

# React Deep_Dive(udemy t.Max)

    - why react? ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก UI๋ฅผ ๋ ์ฝ๊ฒ ๊ตฌํ
    - why component? ์ฌ์ฌ์ฉ์ฑ(์ค๋ณต ๊ฐ์) / ๋ถ๋ฆฌ(์ค๋ฅ ๊ฐ์) ์๊ณ  ๊ด๋ฆฌ ๊ฐ๋ฅํ ๋จ์๋ก ์ ์ง
    - ์๋ฐฉํฅ ๋ฐ์ธ๋ฉ? ๊ธฐ๋ณธ์ ์ผ๋ก ๋ถ๋ชจ -> ์์(๋จ๋ฐฉํฅ)์ธ๋ฐ props๋ก ๋งค๊ฐ๋ณ์ ๋ฐ์์ ๋์ด์ฌ๋ฆฌ๋ฉด 
    ์๋ฐฉํฅ ๊ฐ๋ฅ data <-> view ์๋ก ์๋ฐ์ดํธ๋๋ ์ํธ ๊ตฌ๋ ๊ด๊ณ
    - why key? react๊ฐ ์ฑ๋ฅ ์์ค, ๋ฒ๊ทธ ์์ด ํจ๊ณผ์ ์ผ๋ก DOM์ ๋ณ๊ฒฝ,์ถ๊ฐ,์ญ์ ํ๊ฒ ํด์ค๋ค. 
    => ๊ต์  key๊ฐ์ ํตํด ์๋ฆฌ๋จผํธ or ์ปดํฌ๋ํธ ๋ณํ๋ฅผ ๊ฐ์งํด ํจ์จ์ ์ผ๋ก DOM ์๋ฐ์ดํธ
    - why NextJS? (React ํ๋ ์์ํฌ_๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ณด๋ค ๋ ํฌ๊ณ  ๊ธฐ๋ฅ๊ณผ ๊ท์น์ด ๋ง์)
        1) ์ด๊ธฐ ํ์ด์ง ๋ก๋ฉ ์๋ ๋งค์ฐ์ฆ๊ฐ(SSR_์ด๊ธฐ ํ์ด์ง๋ฅผ ์ฌ์  ๋ ๋๋งํด์ ์ ์  ๋๊ธฐ์๊ฐ์ด ์๋ค)   
        2) SEO ์ต์ ํ (html ์์๋ฅผ ์น ๊ฐ์ง๊ณ ์ ๊ฒ์ ์์๊ถ ๋ธ์ถ์ด ์ฉ์ดํ๋ค)
        - Automatic page pre-rendering: Great for SEO and initial load
        - Blending client-side and server-side: Fetch data on the server and render finished pages
        3) ํ์คํ ํ๋ ์์ํฌ(Fullstack Capabilities)
        - Easily add backend (server-side) code to your Next / React apps
        - Storing data, getting data, authentication etc. can be added to your React projects 
        4) routing (File-based Routing)
        - Define pages and routes with files and folders instead of code
        - Less code, less work, highly understandable
    - why useReducer? state๋ฅผ ์ฒด๊ณ์ ์ผ๋ก ๊ด๋ฆฌํ๋๋ฐ ์ข์ useState๋ณด๋ค 
    ๋ณด์ผ๋ฌํ๋ ์ดํธ๋ ๋ง์ ๋ฌ๋์ปค๋ธ๊ฐ ์กฐ๊ธ์์ง๋ง ๋ก์ง์ ๋ถ๋ฆฌํด ์ปดํฉํธํ๊ฒ ๊ด๋ฆฌ ๊ฐ๋ฅ
    ๋ณต์กํ state ๊ด๋ฆฌ/ state๋ผ๋ฆฌ ์ฐ๊ด๋ ๋ฐ์ดํฐ๋ฅผ ๋ค๋ฃฐ๋ ๊ณ ๋ ค
    - why React.memo? props๊ฐ ๋ณํ  ๋๋ง ๋ฆฌ๋๋๋ง ํด์ค. ๊ทผ๋ฐ ๋ฐ๋ก ์ ์ฅํด๋๊ณ  props๊ฐ ๋ณํํ๋์ง 
    ๋น๊ตํ๋ '์ฌํ๊ฐ ๋น์ฉ'์ด ๋ค๊ธฐ ๋๋ฌธ์ ๋ฆฌ๋๋๋ง ๋น์ฉ์ด ๋ ๋๋์ง props๋ฅผ ๋น๊ตํ๋ ์ฑ๋ฅ ๋น์ฉ
    (props์ ๊ฐฏ์ ์ปดํฌ๋ํธ ๋ณต์ก๋ memo๋ก ๊ฐ์ผ ์ปดํฌ๋ํธ์ ์์ ์ปดํฌ๋ํธ๋ค์ ์) ๋ฑ์ ๋น๊ตํด 
    ์ด๋์ผ ๊ฒฝ์ฐ์๋ง ์ฌ์ฉํ ๊ฒ ์๊ท๋ชจ ์ ํ๋ฆฌ์ผ์ด์์์  ๊ฑฐ์ ํ์์์
    -> ์ ํ๋ฆฌ์ผ์ด์ ๊ท๋ชจ๊ฐ ํฌ๊ณ  & React.memo ๋ก ์ปดํฌ๋ํธ ๋ ๋๋ง ๋ฐฉ์งํ๋ฉด 
    ์์์ปดํฌ๋ํธ ๋ํ ๋ ๋๋ง์ด ๋ฐฉ์ง๋๋ฏ๋ก ์์ ํธ๋ฆฌ๊ฐ ๋ง์ ๊ฒฝ์ฐ์ ์ ์ฉํ๊ฒ ์ฐ์ผ ์ ์๋ค. 

    -for (const key in Array) { // ๊ผญ! ์ธ์ธ๊ฒ, key๋ฅผ๊ฐ์ง ๋ฐฐ์ด key๋ก ๋ฝ์์ ๋ฐ๋ณต๋ฌธ ๋๋ฆฌ๊ธฐ
      const updatedMeal = {...res2[key], id: key}
      setMealArr(prev => [...prev, updatedMeal])
    }
    - why .env? git์ ์ค์ api๋ฑ์ ์ฌ๋ฆฌ๊ธฐ ์ซ์ ๋ ์ฌ์ฉ/ 
    ๊ทผ๋ฐ git์๋ง ์์ฌ๋ผ๊ฐ๊ณ  ๋ฐฐํฌํ ๋๋ ๊ฐ์ด ์๋ก๋๋๊ธฐ๋๋ฌธ์ ์ถ๊ฐ ๊ด๋ฆฌํ์

