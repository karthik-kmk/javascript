// async function getUserData(username) {
//   try {
//     const res = await fetch(`https://api.github.com/users/${username}`);
//     if (!res.ok) {
//       throw new Error("username not found");
//     }

//     const data = await res.json();
//     console.log(data.login);
//     console.log(data.followers);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData("karthik-kmk");

// async function githubUsers() {
//   try {
//     const [user1, user2, user3] = await Promise.all([
//       fetch(`https://api.github.com/users/karthik-kmk`),
//       fetch(`https://api.github.com/users/raina`),
//       fetch(`https://api.github.com/users/lasya`),
//     ]);

//     [user1,user2,user3].forEach((res) => {
//         if(!res.ok)  throw new Error("User not found")
//     })

//     const [data1, data2, data3] = await Promise.all([
//       user1.json(),
//       user2.json(),
//       user3.json(),
//     ]);

//     console.log(
//       `First user is ${data1.login} and followers is ${data1.followers}`
//     );
//     console.log(
//       `Second user is ${data2.login} and followers is ${data2.followers}`
//     );
//     console.log(
//       `Third user is ${data3.login} and followers is ${data3.followers}`
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// githubUsers();

// async function fetchPostAndUser() {
//   try {
//     const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     if (!resPost.ok) {
//       throw new Error("failed to fetch posts");
//     }

//     const data = await resPost.json();

//     const firstPost = data[0];

//     const userRes = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${firstPost.userId}`
//     );

//     if (!userRes.ok) {
//       throw new Error("cant get user details");
//     }
//     const userData = await userRes.json();
//     console.log("Post title:", firstPost.title);
//     console.log("Author:", userData.name);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// fetchPostAndUser();

// async function tryApi(username, tries) {
//   let attempt = 0;
//   while (attempt < tries) {
//     try {
//       attempt++;
//       const res = await fetch(`https://api.github.com/users/${username}`);
//       if (!res.ok) {
//         console.log(`attempt ${attempt} failed,retrying`);
//         continue;
//       }

//       const data = await res.json();
//       console.log(data.followers);
//       return;
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

// tryApi("karthik-kmk", 3);


