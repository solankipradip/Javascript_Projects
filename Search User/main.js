const userContainer = document.querySelector('.user-container');
const searchInput = document.querySelector('#searchInput');

const userData = [
    {
        profileURL: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_FMjpg_UX1000_.jpg",
        name: 'Akshay Kumar',
        email: 'akshay@hotmail.com'
    },
    {
        profileURL: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Salmanrampwalk.png",
        name: 'Salman Khan',
        email: 'sallu@gmail.com'
    },
    {
        profileURL: "https://cdn.123telugu.com/content/wp-content/uploads/2022/11/SHAH-RUKH-KHAN.jpg",
        name: 'shahrukh khan',
        email: 'srk@gmail.com'
    },
    {
        profileURL: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_FMjpg_UX1000_.jpg",
        name: 'Akshay Kumar',
        email: 'akshay@hotmail.com'
    },
]


function renderUsers(arr) {
    userContainer.innerHTML = ""
    arr.map((item) => {

        let { profileURL, name, email } = item

        let divElem = document.createElement("div")
        divElem.className = "user-item";
        divElem.innerHTML = `
                    <img src="${profileURL}" alt="" >
                    <div class="user-info">
                        <h5>${name}</h5>
                        <p>${email}</p>
                    </div>
        `
        userContainer.append(divElem);

    })
}
renderUsers(userData)


function handleSearch(e) {
    let searchValue = e.target.value

    let filterUserData = userData.filter((obj) => { 
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })

    renderUsers(filterUserData)

}

searchInput.addEventListener("input", handleSearch)

