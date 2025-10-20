// const url = fetch(`https://api.github.com/users/karthik-kmk`)
// url
// .then((res) => res.json())
// .then((data) => console.log(data.followers))
// .catch((err) => console.log(err));

// const github = async () => {
//   try {
//     const data = await fetch(`https://api.github.com/users/karthik-kmk`);
//     if (!data.ok) throw new Error("Respsonse was bad");
//     const d = await data.json();
//     console.log(d.login);
//     console.log(d.public_repos);
//   } catch (error) {
//     console.log(error);
//   }
// };

// github();

// const github = async (username) => {
//   try {
//     const data = await fetch(`https://api.github.com/users/${username}`);
//     if (!data.ok) throw new Error("Username not found");
//     const d = await data.json();
//     console.log(d.followers);
//   } catch (error) {
//     console.log(error);
//   }
// };

// github("asdad1p23mp1;l");
// github("karthik-kmk");

// const github = async () => {
//   try {
//     const [data1, data2] = await Promise.all([
//       fetch("https://api.github.com/users/karthik-kmk"),
//       fetch("https://api.github.com/users/raina"),
//     ]);

//     [data1, data2].forEach((res) => {
//       if (!res.ok) throw new Error("FAILED TO FETCH DATA");
//     });

//     const [d1, d2] = await Promise.all([data1.json(), data2.json()]);

//     console.log(d1.login);
//     console.log(d2.login);
//   } catch (error) {
//     console.error(error);
//   }
// };

// github();

// const github = async () => {
//   try {
//     const res1 = await fetch(`https://api.github.com/users/karthik-kmk`);
//     if (!res1.ok) throw new Error("DATA NOT FOUND");

//     const data = await res1.json();


//     const repos = await fetch(data.repos_url);
//     if (!repos.ok) throw new Error("Repos not found");
//     const reposJson = await repos.json();

//     reposJson.forEach(repo => {
//         console.log(repo.name);
        
//     })
    

//   } catch (error) {
//     console.log(error);
//   }
// };

// github();



