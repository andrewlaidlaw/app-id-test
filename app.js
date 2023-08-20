const express = require('express');
const passport = require('passport');
const APIStrategy = require('ibmcloud-appid').APIStrategy;

const app = express();

app.use(passport.initialize());
passport.use(new APIStrategy({
    oauthServerUrl: "https://eu-gb.appid.cloud.ibm.com/oauth/v4/57371683-abe3-4f43-bd78-656158df5c61",
}));

app.use(passport.authenticate(APIStrategy.STRATEGY_NAME, {
    session: false
}));

app.get('/api/data', (req, res) => {
    res.json({
        data: 12345
    });
});

app.listen(3002, () => {
    console.log('Listening on http://localhost:3002')
});