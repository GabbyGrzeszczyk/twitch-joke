const jokes = [
    "Why did the scarecrow choose the BRIEFCROSSING? Because he heard it was the best way to the corn-veinence store in no time!",
    "Why did the lawyer bring a ladder to court? Because he wanted to reach the high standards set by ambsLAW!",
    "Why did the coffee file a police report at the CAFE? It got mugged!",
    "I wanted to become a chiropractor, but the school fees gave me a real 'OOUCHEE' in my wallet!",
    "Why did the man sit on his wallet? Because he heard he should always balance his BUDGET!",
    "Why did RYANS hotdog go to therapy? Because it had too many buns of unresolved issues!",
    "Why did CAZ bring a ladder to the bar? Because he heard the drinks were on the house!",
    "Why did the musician get in trouble at the gig? Because he couldn’t stop playing the wrong CRIGS!",
    "Why did BRAD always keep his DMR in the fridge during Fortnite matches? Because he wanted to stay cool under pressure and always be on point!",
    "Why did GABBY, the Irish woman, always carry a map? Because she wanted to make sure she never got lost in her own 'shamrock'!",
    "Why did MIQUEET bring a rocket to the race track? Because when it comes to speed, he always says, 'Let’s gogogooo!'",
    "Why did the FALCON sit on the computer? Because it wanted to keep an eye on the mouse!",
    "Why did ANNASERENE call her favorite blanket 'Pookie'? Because it’s always warm and fuzzy, just like her charming personality!",
    "Why did MIKEY the Irish guy, always carry a shamrock? Because he wanted to make sure his luck was never 'green' with envy!",
    "Why did HONEY start considering a Twitch stream? Because she realized she’s got the sweetest moves and wanted to share her 'buzzing' personality with everyone!",
    "Why did JP bring his puppies to work? Because he wanted to make sure every day was pawsitively awesome!",
    "Why did WOLFIE get stuck in Anna's basement? Because he heard she had the best 'howls' of laughter and wanted to join in!",
    "Why did CLEPTO, the panda, get in trouble at the zoo? Because he kept 'pawing' through the bamboo and taking extra snacks!",
    "Why did Danee always show up early to the restaurant? Because she wanted to make sure she got the best seat for those sizzling fajitas!",
    "Stef thinks she is not funny... She is just_toomuch!",
    "What's Sammy's favourite food? A sxmwichh.",
    "Why did KAY always get invited to parties? Because she had a great sense of TITTIllating humor!"
];

export default function handler(req, res) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.status(200).send(joke);
}

