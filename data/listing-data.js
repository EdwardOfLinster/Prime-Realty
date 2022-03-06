export function getAllHouses(){
    return HOUSESDATA;
}

export function getHousingTypeById(id){

    return HOUSESDATA.find(item => item.id === id);    
}
// resort list data
export const HOUSESDATA = [
    {
        id: '001',
        address: '1811 E Kent Avenue North',
        price: '3,178,000',
        location: 'South Marine • Vancouver',
        listDetail: '11bd • 8ba • 5130sf',
        keyImage: 'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651950/20220213200337/01.jpeg?trim=auto&fit=crop&w=480&h=287&sharp=25',
        otherImage:[
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651950/20220213200337/01.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651950/20220213200337/02.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651950/20220213200337/03.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651950/20220213200337/04.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651950/20220213200337/05.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
        ],
        desc: "This is a newly constructed house, with a great rental potential up to 120K per year. It's situated in a convenient location with easy access to downtown, Richmond, the YVR Airport, Cambie Skytrain Station, Marine Gateway Station and it's close to all amenities. Modern contemporary custom designed, features excellent craftsmanship and great finishing throughout the house. Design is very practical and thoughtful with an open concept, bright, spacious floor plan with high ceiling, kitchen and dining area are open into a large sundeck and private yard. Air Conditioning, HAVC System, basement 2 bdrm suite, basement another 2 bdrm suite, laneway 2 bdrm suite, Main flr 2 bdrm suite, Main flr 3 bdrm suite, Main flr potential for another bdrm. It could be a great mortgage helper while you live in the house as your principle residence. A block away from gladstone park, Fraser River.",
        priceDetails:[
            {key: 0, name:'List Price', value: '3,178,000'},
            {key: 1, name:'Taxes for 2021', value: '7,507'},
        ],
        homeDetails:[
            {key: 0, name:'Bedrooms', value: '11'},
            {key: 1, name:'Bathrooms', value: '8'},
            {key: 2, name:'Property Type', value: 'House'},
            {key: 3, name:'Lot Size', value: '45 ft x 158 ft (7154 ft²)'},
            {key: 4, name:'Year Built', value: '2019 (3 yrs old)'},
            {key: 5, name:'Location', value: 'South Marine'}
        ],
        type: 'house',
        featured: true

    },
    {
        id: '002',
        address: '3672 W 1st Avenue',
        price: '2,980,000',
        location: 'Kitsilano • Vancouver',
        listDetail: '6 bd • 4ba • 2733sf',
        keyImage: 'https://assets-listings.rew.ca/brc_idx_rew/brc/R2649781/20220207184209/01.jpeg?trim=auto&fit=crop&w=480&h=287&sharp=25',
        otherImage:[
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2649781/20220207184209/01.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2649781/20220207184209/02.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2649781/20220207184209/03.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2649781/20220207184209/04.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2649781/20220207184209/10.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560'
        ],
        desc: '1925 Character home a block to water! Enjoy a beautiful 1925 gem sitting on a full 33x120 RT8 (south-facing backyard) zoned lot and ready to be restored to its original beauty. This six-bedroom home has over 2733 sf of finished area on three levels, complete with a 1-bedroom lock-off garden suite (mo-mo tnt). Take over mom’s beautiful century-old garden. If you ever wanted to live a block away from the water, RVYC, Jericho Tennis Club and another block to Jericho Beach park, here it is. Walk out your door and go for an ocean swim, run, or cycle along Vancouver’s most beautiful green route from UBC to Stanley Park. It’s all here and at a tremendous value, priced below assessment. Home has family/friends living in the main home allowing for flexible possession.',
        priceDetails:[
            {key: 0, name:'List Price', value: '2,980,000'},
            {key: 1, name:'Taxes for 2021', value: '9,399'},
        ],
        homeDetails:[
            {key: 0, name:'Bedrooms', value: '6'},
            {key: 1, name:'Bathrooms', value: '4'},
            {key: 2, name:'Property Type', value: 'House'},
            {key: 3, name:'Year Built', value: '1925 (97 yrs old)'},
            {key: 4, name:'Location', value: 'Kitsilano - Vancouver'}
        ],
        type: 'house',
        featured: true
    },
    {
        id: '003',
        address: '2002 1155 Homer St',
        price: '759,900',
        location: 'Yaletown • Vancouver',
        listDetail: '1 bd • 1ba • 655sf',
        keyImage: 'https://assets-listings.rew.ca/brc_idx_rew/brc/R2652505/20220214203245/02.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
        otherImage:[
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2652505/20220214203245/01.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2652505/20220214203245/02.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2652505/20220214203245/03.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2652505/20220214203245/05.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2652505/20220214203245/07.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560'
        ],
        desc: 'Stunning VIEWS from this rarely available South facing, corner high floor 1 bed + flex room home with beautiful False Creek water & city views in the prestigious City Crest building! Featuring an open floor plan with an abundance of natural light with floor to ceiling windows. Large & spacious living area with an oversized bedroom which easily fits a king bed. Freshly painted with newly stained floors. Incredible location in the heart of Yaletown, just steps to restaurants, shops, grocery stores, the Canada Line, banks, and the best of Downtown living! Perfect for a first time home buyer or an investor. Pet and rentals allowed! Complete with 1 parking and 1 storage locker.',
        priceDetails:[
            {key: 0, name:'List Price', value: '759,900'},
            {key: 1, name:'Taxes for 2021', value: '1,946'},
            {key: 2, name:'Strata Fees', value: '320'}
        ],
        homeDetails:[
            {key: 0, name:'Bedrooms', value: '1'},
            {key: 1, name:'Bathrooms', value: '1'},
            {key: 2, name:'Property Type', value: 'Apt/Condo'},
            {key: 3, name:'Year Built', value: '1994 (28 yrs old)'},
            {key: 4, name:'Location', value: 'Yaletown - Vancouver'}
        ],
        type: 'apt',
        featured: true
    },
    {
        id: '004',
        address: '2789 Alamein Avenue',
        price: '1,998,000',
        location: 'Arbutus • Vancouver',
        listDetail: '2 bd • 3ba • 1333sf',
        keyImage: 'https://assets-listings.rew.ca/brc_idx_rew/brc/R2631083/20211118184410/01.jpeg?trim=auto&fit=crop&w=480&h=287&sharp=25',
        otherImage:[
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2631083/20211118184410/01.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2631083/20211118184410/02.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2631083/20211118184410/03.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2631083/20211118184410/10.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2631083/20211118184410/17.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560'
        ],
        desc: 'Experience the finest Vancouver has to offer. Westbury is a one-of-a-kind townhome community in the heart of Arbutus Ridge. Custom detailed finishes & grand foyer upon entry w/ over-height ceilings. Walk into your luxurious living room w/ engineered oak hardwood floors & custom blackout drapery for optimum privacy. Chef’s dream kitchen with European designed wood-veneer cabinetry, soft-closing drawers with sensor light, gleaming solid 3” quartz countertops and world-renowned 36” Gaggenau SS appliances. Enter your master oasis with plush wool carpets & walk-in closet w/ custom made closet organizers. Enjoy your master ensuite with 3” double vanity countertops, in floor heating & large porcelain tiles. Comes w/ 2 secure parking stalls w/ EV Charger. GST INCLUDED!',
        priceDetails:[
            {key: 0, name:'List Price', value: '1,998,000'},
            {key: 1, name:'Taxes for 2021', value: '0'},
            {key: 2, name:'Strata Fees', value: '628'}
        ],
        homeDetails:[
            {key: 0, name:'Bedrooms', value: '2'},
            {key: 1, name:'Bathrooms', value: '3'},
            {key: 2, name:'Property Type', value: 'Townhouse'},
            {key: 3, name:'Year Built', value: '2020 (2 yrs old)'},
            {key: 4, name:'Location', value: 'Arbutus - Vancouver'}
        ],
        type: 'townhouse',
        featured: true
    },
    {
        id: '005',
        address: '162 E 43rd Avenue',
        price: '1,099,000',
        location: 'Main • Vancouver',
        listDetail: '0 bd • 21 x 82 ft',
        keyImage: 'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651266/20220209232338/01.jpeg?trim=auto&fit=crop&w=480&h=287&sharp=25',
        otherImage:[
            'https://assets-listings.rew.ca/brc_idx_rew/brc/R2651266/20220209232338/01.jpeg?auto=format&fit=fill&ixlib=react-8.5.1&w=560',
        ],
        desc: 'This home is the perfect renovation project and is strategically located west of Main in the catchment area of Sir William Van Horne Elementary and Eric Hamber Secondary School. Offers on Valentines Day, Feb. 14th at 1pm.',
        priceDetails:[
            {key: 0, name:'List Price', value: '1,099,000'},
            {key: 1, name:'Taxes for 2021', value: '4,582'},
        ],
        homeDetails:[
            {key: 0, name:'Bedrooms', value: '0'},
            {key: 1, name:'Bathrooms', value: '0'},
            {key: 2, name:'Property Type', value: 'Land/Lot'},
            {key: 3, name:'Lot Size', value: '21 ft x 82 ft (1766 ft²)'},
            {key: 4, name:'Depth', value: '82.1 ft'},
            {key: 5, name:'Frontage', value: '21.5 ft'},
            {key:6, name:'Location', value: 'Main - Vancouver'}
        ],
        type: 'land',
        featured: true
    },
    
];

