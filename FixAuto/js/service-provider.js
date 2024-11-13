let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let districtSelect = document.querySelector('[name="district"]');
let citySelect = document.querySelector('[name="city"]');

let originalListProducts = [
    {
        id: 1,
        name: 'TOYOTA LANKA',
        Rating: 4.5,
        image: '/img/toyota.png',
        description: 'We are the exclusive dealer / distributor for the TOYOTA and HINO brands in Sri Lanka and a fully owned subsidiary of Toyota Tsusho Corporation (TTC), Japan. Hence, we are a global member company of the prestigious Toyota Group, Japan.',
        services: ['TOYOTA TOTAL CARE & MAINTENANCE', 'INSPECTIONS', 'BODY AND PAINT CENTRE',' GENERAL SERVICES', 'GENERAL SERVICES', 'OUR PROFESSIONAL TEAM', 'PERIODIC MAINTENANCE', 'ACCIDENT REPAIRS','GENERAL REPAIRS'],     
         nature: {
            Vehicle: ['Suv', 'Car' ,'Van'],
            Location: ['Gampaha', 'Colombo', 'Kalutara', 'Ratnapura', 'Ratnapura', 'Kandy', 'Galle', 'Matara', 'Anuradhapura', 'Ampara'],
        }
    },

    {
        id: 2,
        name: 'Mag City',
        Rating: 4.7,
        image: '/img/mag-city.png',
        description: 'Mag City provides you with one place for all your vehicle needs in Sri Lanka. From running repairs, servicing, collision repairs, paint protection, etc.',
        services: ['RUNNING REPAIRS', 'FULL SERVICE',' COLLISION REPAIRS', 'TUNE UP', 'VEHICLE ACCESSORIES', 'PROFESSIONAL TEAM', 'Vehicle detailing'],
        nature: {
            Vehicle: ['Car'],
            Location: ['Colombo', 'Kandy', 'Galle'],
            City: ['Colombo', 'Galle', 'Nugegoda','Ratmalana','Pallekele']
        }
    },

    {
        id: 4,
        name: 'AUTO MIRAJ',
        Rating: 4.1,
        image: '/img/auto-miraj.png',
        description: 'Auto Miraj being Sri Lanka’s largest and the best auto service network; has the most diverse service portfolio. Auto Miraj is your one stop station for all of your maintenance, repairs, and services.',
        services: ['PERIODIC MAINTENANCE', 'NANO COATING', 'TYRE SERVICES', 'MECHANICAL REPAIR', 'COLLISION REPAIRS'],
        nature: {
            Vehicle: ['Van', 'Car'],
            Location: ['Colombo', 'Kandy', 'Matara', 'Gampaha','Kalutara','Badulla','Kurunegala'],
            City: ['Delkanda', 'Gampaha', 'Katubedda', 'Thalawathugoda', 'Dehiwala-Mount Lavinia', 'Matara', 'Colombo', 'Bandarawela', 'Attidiya', 'Moratuwa', 'Ja-Ela', 'Beruwala', 'Maharagama', 'Panadura', 'Rathmalana', 'Kohuwala', 'Kurunegala', 'Pepiliyana', 'Kandy']
        }
    },
    {
        id: 5,
        name: 'LAUGFS Car Care',
        Rating: 4.6,
        image: '/img/laugfs-car.jpeg',
        description: 'We at LAUGFS Car Care offer convenient and quality driven services for your vehicle. From a basic exterior wash to more specialized major hybrid technical repairs; our professionally trained staff delivers exceptional results on all types of vehicles.',
        services: ['VEHICLE WASH', 'INTERIOR AND EXTERIOR DETAILING', 'FULL SERVICE', 'HYBRID SERVICE', 'WHEEL ALIGNMENT', 'OTHER SPECIALIZED SERVICES'],
        nature: {
            Vehicle: ['Motorcycle', 'Car'],
            Location: ['Kurunegala', 'Colombo', 'Galle', 'Gampaha',],
            City: ['Bellanthota', 'Dehiwala', 'Galle', 'Kalagedihena', 'Kirulapone', 'Koswatta', 'Kurunegala', 'Maharagama', 'Negombo', 'Orugodawatta',]
        }

    },

    {
        id: 5,
        name: 'United Motors Lanka',
        Rating: 4.5,
        image: '/img/united-motors.png',
        description: 'United Motors Lanka PLC is one of the oldest automobile companies in Sri Lanka. We are an organization that has earned our place among the top-tier business entities of the island being continuously recognized thus by LMD in the LMD 100 and Most Respected Entities.',
        services: ['MECHANICAL REPAIRS', 'COLLISION REPAIRS', 'LUBRICATION SERVICES', 'VEHICLE DETAILING','WHEEL ALIGNMENT'],
        nature: {
            Vehicle: ['Suv', 'Car', 'Van'],
            Location: ['Colombo', 'Anuradhapura', 'Kandy', 'Jaffna', 'Gampaha', 'Kurunegala', 'Matara'],
            City: ['Colombo 02', 'Orugodawatta', 'Rathmalana', 'Anuradhapura', 'Kandy', 'Jaffna', 'Peliyagoda', 'Kurunegala', 'Matara', 'Nugegoda',]
        }

    },
   
    {
        id: 6,
        name: 'David Pieris Motor Company',
        Rating: 4.0,
        image: '/img/dpmc.png',
        description: 'David Pieris Motor Company (Pvt) Ltd is the sole distributors for Bajaj, KTM, MRF and Fortem Brands in Sri Lanka.',
        services: ['Motorcycle Service', 'Three-wheeler Service',' Bajaj QUTE Service', 'Vehicle Interior - Leather Cleaning and Care'],
        nature: {
            Vehicle: ['Motorcycle', 'Tuk-Tuk', 'Car'],
            Location: ['Madawachchiya','Jaffna', 'Anuradhapura', 'Badulla', 'Ratnapura', 'Kurunegala', 'Gampaha', 'Colombo', 'Galle'],
            City: ['Madatha','Matara','Jaffna','Anuradhapura', 'Badulla', 'Ratnapura', 'Kurunegala','Negombo','Colombo 02', 'Galle']
        }

    },

    {
        id: 7,
        name: 'Seetha Service Station',
        Rating: 4.1,
        image: '/img/seetha.jpg',
        description: 'Seetha Service Station is a car wash and Fuel Station',
        services: ['CAR WASH'],
        nature: {
            Vehicle: ['Van','Car'],
            Location: ['Kandy',],
            City: ['Pilimathalawa',]
        }

    },
];


let listProducts = [...originalListProducts]; // Create a copy of the original array

let cityOptions = {
    Colombo: ['Colombo','Colombo 02','Wattala', 'Panchikawatte', 'Nugegoda', 'Maharagama', 'Ratmalana', 'Delkanda', 'Dehiwala-Mount Lavinia', 'Dehiwala', 'Moratuwa', 'Kohuwala', 'Rathmalana', 'Attidiya', 'Pepiliyana', 'Kalagedihena', 'Kirulapone', 'Koswatta', 'Orugodawatta'],
    Gampaha: ['Peliyagoda', 'Gampaha', 'Ja-Ela', 'Negombo'],
    Kalutara: ['Kalutara', 'Katubedda', 'Beruwala', 'Panadura'],
    Matara: ['Matara'],
    Badulla: ['Bandarawela'],
    Kurunegala: ['Kurunegala', 'Bellanthota'],
    Kandy: ['Kandy', 'Pallekele','Pilimathalawa',],
    Galle: ['Galle'],
    Anuradhapura: ['Anuradhapura'],
    Ampara: ['Ampara'],
    Madawachchiya: ['Madatha'],
    Ratnapura: ['Ratnapura'],
    Jaffna: ['Jaffna']
    
};

populateCities();

filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    console.log("District:", valueFilter.district.value);
    console.log("City:", valueFilter.city.value);
    console.log("Vehicle:", valueFilter.Vehicle.value);  // Correct case
    console.log("Name:", valueFilter.name.value);

    listProducts = filterProducts(valueFilter.district.value, valueFilter.city.value, valueFilter.Vehicle.value, valueFilter.name.value);

    console.log("Filtered Products:", listProducts);

    showProducts(listProducts);
});

function filterProducts(district, city, vehicle, name) {
    return originalListProducts.filter(item => {
        // Check district
        if (district !== '' && !item.nature.Location.includes(district)) {
            return false;
        }

        // Check city
        if (city !== '' && !item.nature.City.includes(city)) {
            return false;
        }

        // Check vehicle (case-insensitive)
        if (vehicle !== '' && !item.nature.Vehicle.some(v => v.toLowerCase() === vehicle.toLowerCase())) {
            return false;
        }

        // Check name
        if (name !== '' && !item.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }

        return true;
    });
}


function showProducts(products) {
    count.innerText = products.length;
    list.innerHTML = '';

    products.forEach((item, index) => {
        let newItem = document.createElement('div');
        newItem.classList.add('item', 'reveal-item');

        // Create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

        // Create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        // Create rating
        let newRating = document.createElement('div');
        newRating.classList.add('rating');
        newRating.innerText = `Rating: ${item.Rating.toLocaleString()}`;
        newItem.appendChild(newRating);

        // Create View More button
        let viewMoreButton = document.createElement('button');
        viewMoreButton.innerText = 'View More';
        viewMoreButton.addEventListener('click', function () {
            // Pass the selected shop details to the shop details page
            localStorage.setItem('selectedShop', JSON.stringify(item));
            // Navigate to the shop details page
            window.location.href = 'shop.html';
        });

        newItem.appendChild(viewMoreButton);
        list.appendChild(newItem);
    });

    // Configure ScrollReveal to reveal items as you scroll down
    ScrollReveal().reveal('.reveal-item', {
        delay: 500,
        origin: 'top',
        distance: '20px',
        easing: 'ease-in-out',
        duration: 300,
        interval: 200,
        reset: true,
        mobile: true,
    });
}

function populateCities() {
    districtSelect.addEventListener('change', function () {
        let selectedDistrict = districtSelect.value;
        citySelect.innerHTML = '<option value="">All</option>';

        if (selectedDistrict && cityOptions[selectedDistrict]) {
            cityOptions[selectedDistrict].forEach(city => {
                let option = document.createElement('option');
                option.value = city;
                option.text = city;
                citySelect.add(option);
            });
        }
    });
}

// Call showProducts to initialize the items and ScrollReveal
showProducts(listProducts);
