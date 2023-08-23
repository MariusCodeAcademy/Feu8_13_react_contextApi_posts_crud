## context

1. sukurti AuthContextProvider.jsx
2. sukurti kontexta AuthContext

# Praktika

## PostsPage

```jsx
{postsArr.map((pObj) => (
// 1 vietoj li generuoti SinglePostLink
<li key={pObj.id}>
  {/* 2. vietoj "5" paduoti posto id */}
  <Link to={'/posts/5'}>{pObj.title}</Link>
</li>
```

## App.jsx

```jsx
{
  /* vietoj penketo turi buti dinaminis posto id parametras (taip jau darem pries tai) */
}
<Route path='/posts/5' element={<SinglePostPage />} />;
```

## SinglePostPage

1. pasiimti dinamine adreso dali (parametra) tai yra post id
2. parsisiusti su axios konkretu posta (useState, useEffect)
3. graziai atvaizuosim visa info esancia posto objekte, stilizuojam su module css

#### logout

4. Prideti mygtuka logout
5. padaryti kad atsilogintu ir nunaviguotu i login

#### delete

4. prideti delete mygtuka
5. padaryti kad siusiu delete su axios, jei sekmingas naviguotu atgal i posts

## PostsPage

1. Prideti inputa sujungti su state
2. padaryti kad inputas filtruotu postus pagal title
