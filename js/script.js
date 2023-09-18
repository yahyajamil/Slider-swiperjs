const profiles = [
    { id: 1, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile1.jpeg" },
    { id: 2, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile2.jpeg" },
    { id: 3, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile3.jpeg" },
    { id: 4, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile4.jpeg" },
    { id: 5, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile5.jpeg" },
    { id: 6, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile6.jpeg" },
    { id: 7, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile7.jpeg" },
    { id: 8, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile8.jpeg" },
    { id: 9, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile9.jpeg" },
    { id: 10, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile10.jpeg" },
    { id: 11, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/profile11.jpeg" },
    { id: 12, name: "David Dell", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi hicunde, corporis, laborum iure omnis deleniti similique est nostrum vitae at beatae quibusdam suscipit.", image: "image/image12.jpeg" },
]

let cardWrapperElem = document.querySelector(".card-wrapper");

let profile = profiles.forEach((profile) => {
    let card = `<div class="card swiper-slide">
    <div class="image-content">
        <span class="overlay"></span>

        <div class="card-image">
            <img src=${profile.image} alt="" class="card-img">
        </div>
    </div>
    <div class="card-content">
        <h2 class="name">${profile.name}</h2>
        <p class="description">${profile.description}</p>
        <button class="btn">View More</button>
    </div>
</div>`;

    cardWrapperElem.insertAdjacentHTML("beforeend", card);
});
