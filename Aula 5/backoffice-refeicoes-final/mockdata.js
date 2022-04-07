let meals = [
    {
        id: 1,
        name: 'Budino Di Ricotta',
        instructions:
            'Mash the ricotta and beat well with the egg yolks, stir in the flour, sugar, cinnamon, grated lemon rind and the rum and mix well. You can do this in a food processor. Beat the egg whites until stiff, fold in and pour into a buttered and floured 25cm cake tin. Bake in the oven at 180ºC/160ºC fan/gas 4 for about 40 minutes, or until it is firm.\r\n\r\nServe hot or cold dusted with icing sugar.',
        category: 'Dessert',
        image: 'https://www.themealdb.com/images/media/meals/1549542877.jpg',
        price: 12.0,
        quantity: 5,
    },
    {
        id: 2,
        name: 'Ratatouille',
        instructions:
            'Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.',
        category: 'Vegetarian',
        image: 'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg',
        price: 12.0,
        quantity: 0,
    },
    {
        id: 3,
        name: 'Venetian Duck Ragu',
        instructions:
            'Heat the oil in a large pan. Add the duck legs and brown on all sides for about 10 mins. Remove to a plate and set aside. Add the onions to the pan and cook for 5 mins until softened. Add the garlic and cook for a further 1 min, then stir in the cinnamon and flour and cook for a further min. Return the duck to the pan, add the wine, tomatoes, stock, herbs, sugar and seasoning. Bring to a simmer, then lower the heat, cover with a lid and cook for 2 hrs, stirring every now and then.\r\nCarefully lift the duck legs out of the sauce and place on a plate – they will be very tender so try not to lose any of the meat. Pull off and discard the fat, then shred the meat with 2 forks and discard the bones. Add the meat back to the sauce with the milk and simmer, uncovered, for a further 10-15 mins while you cook the pasta.\r\nCook the pasta following pack instructions, then drain, reserving a cup of the pasta water, and add the pasta to the ragu. Stir to coat all the pasta in the sauce and cook for 1 min more, adding a splash of cooking liquid if it looks dry. Serve with grated Parmesan, if you like.',
        category: 'Pasta',
        image: 'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
        price: 12.5,
        quantity: 3,
    },
    {
        id: 4,
        name: 'Montreal Smoked Meat',
        instructions:
            'To make the cure, in a small bowl mix together salt, pink salt, black pepper, coriander, sugar, bay leaf, and cloves. Coat entire brisket with the cure and place in an extra-large resealable plastic bag. Place in the coldest part of the refrigerator and cure for 4 days, flipping brisket twice a day.\r\nRemove brisket from bag and wash as much cure off as possible under cold running water. Place brisket in a large container and fill with water and let soak for 2 hours, replacing water every 30 minutes. Remove from water and pat dry with paper towels.\r\nTo make the rub, mix together black pepper, coriander, paprika, garlic powder, onion powder, dill weed, mustard, celery seed, and crushed red papper in a small bowl. Coat entire brisket with the rub.\r\nFire up smoker or grill to 225 degrees, adding chunks of smoking wood chunks when at temperature. When wood is ignited and producing smoke, place brisket in, fat side up, and smoke until an instant read thermometer registers 165 degrees when inserted into thickest part of the brisket, about 6 hours.\r\nTransfer brisket to large roasting pan with V-rack. Place roasting pan over two burners on stovetop and fill with 1-inch of water. Bring water to a boil over high heat, reduce heat to medium, cover roasting pan with aluminum foil, and steam brisket until an instant read thermometer registers 180 degrees when inserted into thickest part of the meat, 1 to 2 hours, adding more hot water as needed.\r\nTransfer brisket to cutting board and let cool slightly. Slice and serve, preferably on rye with mustard.',
        category: 'Beef',
        image: 'https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg',
        price: 12.5,
        quantity: 4,
    },
    {
        id: 5,
        name: 'Bubble & Squeak',
        instructions:
            'Melt the fat in a non-stick pan, allow it to get nice and hot, then add the bacon. As it begins to brown, add the onion and garlic. Next, add the sliced sprouts or cabbage and let it colour slightly. All this will take 5-6 mins.\r\nNext, add the potato. Work everything together in the pan and push it down so that the mixture covers the base of the pan – allow the mixture to catch slightly on the base of the pan before turning it over and doing the same again. It’s the bits of potato that catch in the pan that define the term ‘bubble and squeak’, so be brave and let the mixture colour. Cut into wedges and serve.',
        category: 'Pork',
        image: 'https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg',
        price: 10.0,
        quantity: 10,
    },
    {
        id: 6,
        name: 'Walnut Roll Gužvara',
        instructions:
            'Mix all the ingredients for the dough together and knead well. Cover the dough and put to rise until doubled in size which should take about 2 hours. Knock back the dough and knead lightly.\r\n\r\nDivide the dough into two equal pieces; roll each piece into an oblong about 12 inches by 8 inches. Mix the filling ingredients together and divide between the dough, spreading over each piece. Roll up the oblongs as tightly as possible to give two 12 inch sausages. Place these side by side, touching each other, on a greased baking sheet. Cover and leave to rise for about 40 minutes. Heat oven to 200ºC (425ºF). Bake for 30-35 minutes until well risen and golden brown. Bread should sound hollow when the base is tapped.\r\n\r\nRemove from oven and brush the hot bread top with milk. Sift with a generous covering of icing sugar.',
        category: 'Dessert',
        image: 'https://www.themealdb.com/images/media/meals/u9l7k81628771647.jpg',
        price: 13.0,
        quantity: 6,
    },
    {
        id: 7,
        name: 'Pouding chomeur',
        instructions:
            'In a large bowl, with an electric mixer, mix the butter and sugar till the mix is light.\r\nAdd eggs and vanilla and mix.\r\nIn another bowl, mix flour and baking powder.\r\nAlternate flour mix and milk to the butter mix.\r\nPour into a 13 inch by 9 inch greased pan.\r\nMAPLE SAUCE.\r\nIn a large casserole, bring to boil the syrup, brown sugar, cream and butter and constantly stir.\r\nReduce heat and and gently cook 2 minutes or till sauce has reduced a little bit.\r\nPour sauce gently over cake.\r\nBake at 325°f (160°c) about 35 minutes or till cake is light brown and when toothpick inserted comes out clean.',
        category: 'Dessert',
        image: 'https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg',
        price: 12.0,
        quantity: 0,
    },
    {
        id: 8,
        name: 'Three Fish Pie',
        instructions:
            'Preheat the oven to 200C/400F/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.',
        category: 'Seafood',
        image: 'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
        price: 13.5,
        quantity: 9,
    },
    {
        id: 9,
        name: 'Pate Chinois',
        instructions:
            'In a large pot of salted water, cook the potatoes until they are very tender. Drain.\r\nWith a masher, coarsely crush the potatoes with at least 30 ml (2 tablespoons) of butter. With an electric mixer, purée with the milk. Season with salt and pepper. Set aside.\r\nWith the rack in the middle position, preheat the oven to 190 °C (375 °F).\r\nIn a large skillet, brown the onion in the remaining butter. Add the meat and cook until golden brown. Season with salt and pepper. Remove from the heat.\r\nLightly press the meat at the bottom of a 20-cm (8-inch) square baking dish. Cover with the corn and the mashed potatoes. Sprinkle with paprika and parsley.\r\nBake for about 30 minutes. Finish cooking under the broiler. Let cool for 10 minutes.',
        category: 'Beef',
        image: 'https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg',
        price: 13.5,
        quantity: 10,
    },
    {
        id: 10,
        name: 'Cream Cheese Tart',
        instructions:
            'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy.',
        category: 'Starter',
        image: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
        price: 10.0,
        quantity: 5,
    },
    {
        id: 11,
        name: 'Braised Beef Chilli',
        instructions:
            'Preheat the oven to 120C/225F/gas mark 1.\r\n\r\nTake the meat out of the fridge to de-chill. Pulse the onions and garlic in a food processor until finely chopped. Heat 2 tbsp olive oil in a large casserole and sear the meat on all sides until golden.\r\n\r\nSet to one side and add another small slug of oil to brown the chorizo. Remove and add the onion and garlic, spices, herbs and chillies then cook until soft in the chorizo oil. Season with salt and pepper and add the vinegar, tomatoes, ketchup and sugar.\r\n\r\nPut all the meat back into the pot with 400ml water (or red wine if you prefer), bring up to a simmer and cook, covered, in the low oven.\r\n\r\nAfter 2 hours, check the meat and add the beans. Cook for a further hour and just before serving, pull the meat apart with a pair of forks.',
        category: 'Beef',
        image: 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
        price: 13.0,
        quantity: 4,
    },
]
