'use strict';

export default {
  cities: [
    {
        name: 'New York',
        latitude: 40.712784,
        longitude: -74.005941
    },
    {
        name: 'Jersey City',
        latitude: 40.728157,
        longitude: -74.077642
    },
    {
        name: 'Newark',
        latitude: 40.735657,
        longitude: -74.172367
    },
    {
        name: 'Irvington',
        latitude: 40.726325,
        longitude: -74.228643
    },
    {
        name: 'Nutley',
        latitude: 40.822317,
        longitude: -74.159873
    }
  ],

  results: [
    {
        from: 'New York',
        carPhoto: 'http://o.aolcdn.com/dims-shared/dims3/GLOB/legacy_thumbnail/750x422/quality/95/http://www.blogcdn.com/slideshows/images/slides/301/559/2/S3015592/slug/l/01-2015-bmw-x6-fd-1.jpg',
        to: 'Nutley',
        time: 'Leaving in 7 minutes',
        comment: 'I will pass through Jersey city and national theatre',
        avatar: 'https://pbs.twimg.com/profile_images/458794690867761152/IMn9gg6K.jpeg',
        name: 'Tony Stark',
        car: 'BMW X6',
        price: '5$'
    },
    {
        from: 'New York',
        carPhoto: 'http://images.parenting.mdpcdn.com/sites/parenting.com/files/styles/slide/public/600_ss4_honda-crv.jpg?itok=DozQL3El',
        to: 'Newark',
        time: 'Leaving in 23 minutes',
        comment: 'Cookies included',
        avatar: 'http://www.fresher.ru/manager_content/images2/posvyashhaetsya-samomu-iskrometnomu-cheloveku-v-mire/big/4.jpg',
        name: 'Ms. Dautfaer',
        car: 'Honda CRV',
        price: '7$'
    },
    {
        from: 'New York',
        carPhoto: 'http://cdn.corlate.xyz/2015/08/09/1967chevyimpala-l-a1d305ac053665a4.jpg',
        to: 'Nutley',
        comment: 'Dont forget to take with you holy water, silver bullets and wooden stake',
        time: 'Leaving in 56 minutes',
        avatar: 'https://pbs.twimg.com/profile_images/426505381536231424/tzTrriTc.jpeg',
        name: 'Dean Winchester',
        car: 'Chevrolet Impala 67',
        price: '9$'
    }
  ],

  history: [
    {
        from: 'New York',
        to: 'Nutley',
        date: '26/06/2015',
        avatar: 'https://pbs.twimg.com/profile_images/458794690867761152/IMn9gg6K.jpeg',
        name: 'Tony Stark',
        car: 'BMW X6',
        price: '5$'
    },
    {
        from: 'New York',
        to: 'Nutley',
        date: '26/06/2015',
        avatar: 'https://pbs.twimg.com/profile_images/458794690867761152/IMn9gg6K.jpeg',
        name: 'Tony Stark',
        car: 'BMW X6',
        price: '5$'
    },
    {
        from: 'New York',
        to: 'Nutley',
        date: '26/06/2015',
        avatar: 'https://pbs.twimg.com/profile_images/458794690867761152/IMn9gg6K.jpeg',
        name: 'Tony Stark',
        car: 'BMW X6',
        price: '5$'
    },
    {
        from: 'New York',
        to: 'Nutley',
        date: '26/06/2015',
        avatar: 'https://pbs.twimg.com/profile_images/458794690867761152/IMn9gg6K.jpeg',
        name: 'Tony Stark',
        car: 'BMW X6',
        price: '5$'
    }
  ],

  top: [
    {
        name: 'Dean Winchester',
        rank: 4.7,
        carPhoto: 'http://cdn.corlate.xyz/2015/08/09/1967chevyimpala-l-a1d305ac053665a4.jpg',
        numberOfTrips: 21,
        description: 'Glad to have trip with you',
        avatar: 'https://pbs.twimg.com/profile_images/426505381536231424/tzTrriTc.jpeg',
        car: 'Chevrolet Impala 67',
        reviews: [
            {
                author: 'Sam Winchester',
                time: '26 July 2015',
                text: 'You rock Dean! Love travelling with you!',
                authorAvatar: 'https://pbs.twimg.com/profile_images/484064924574826496/MpPayKBr_400x400.png',
                rate: 4
            },
            {
                author: 'Vampire',
                time: '26 September 2015',
                text: 'It was bloody awesome',
                authorAvatar: 'http://i.bnet.com/blogs/110626-vampire.jpg',
                rate: 4
            },
            {
                author: 'Dead Man',
                time: '22 August 2015',
                text: 'I love these guys. Such an amazing adventure!',
                authorAvatar: 'http://vignette3.wikia.nocookie.net/villains/images/b/b3/Lucifer_(Supernatural).jpg/revision/latest?cb=20121109193015',
                rate: 4
            }
        ]
    },

    {
        name: 'James Marsden',
        rank: 4.3,
        carPhoto: 'http://grindhousemovie.net/images/cars/165832/bmw-328i-cabrio-e36-1996-001864.jpg',
        numberOfTrips: 30,
        description: 'Glad to have trip with you',
        avatar: 'http://www.obnovi.com/uploads/posts/2010-03/1268489159_2.png',
        car: 'BMW',
        reviews: [
            {
                author: 'O.W. Grant',
                time: '26 July 2015',
                text: 'Amazing adventure!',
                authorAvatar: 'http://www.dvdtalk.ru/img/still/interstate-60/000005b.jpg',
                rate: 4
            },
            {
                author: 'Ray',
                time: '26 July 2015',
                text: 'Great! Great! Great trip!',
                authorAvatar: 'http://mnenie-about.ru/wp-content/uploads/2010/11/tr60.jpg',
                rate: 5
            }
        ]
    },

    {
        name: 'Charlie Babbitt',
        rank: 4.2,
        carPhoto: 'http://media.tumblr.com/tumblr_m1tvlknjNK1r5414t.jpg',
        numberOfTrips: 11,
        description: 'Glad to have trip with you',
        avatar: 'http://content.internetvideoarchive.com/content/photos/7170/30116204_.jpg',
        car: 'Chevrolet Impala 67',
        reviews: [
            {
                author: 'Raymond Babbitt',
                time: '26 July 2015',
                text: 'We saw 1247 trees, 2356 cars during the trip',
                authorAvatar: 'http://www.wearysloth.com/Gallery/ActorsH/8068-15562.gif',
                rate: 4
            },
            {
                author: 'Susanna',
                time: '26 June 2015',
                text: 'Hot guy!',
                authorAvatar: 'http://www.hdtvsolutions.com/images/articles/RainMan_Galino2.jpg',
                rate: 5
            }
        ]
    }
  ]
}