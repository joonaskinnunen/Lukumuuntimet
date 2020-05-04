import React from 'react'
import { Route } from 'react-router'

export default (
    <Route>
        <Route exact path="/" render={() => <Home />} />
            <Route exact path="/matematiikka" render={() => <Math />} />
            <Route path="/matematiikka/prosenttilaskuri" render={() => <PercentCalc />} />
            <Route path="/yksikkomuuntimet/binaari-desimaali-muunnin" render={() => <BinToDecCon />} />
            <Route path="/yksikkomuuntimet/desimaali-binaari-muunnin" render={() => <DecToBinCon />} />
            <Route path="/yksikkomuuntimet/desimaali-heksadesimaali-muunnin" render={() => <DecToHexCon />} />
            <Route path="/yksikkomuuntimet/desimaali-oktaaliluku-muunnin" render={() => <DecToOctCon />} />
            <Route exact path="/hyoty" render={() => <Useful />} />
            <Route path="/hyoty/merkki-ja-sanalaskuri" render={() => <CharCount />} />
            <Route exact path="/raha" render={() => <Finance />} />
            <Route path="/raha/alv-laskuri" render={() => <VatCount />} />
            <Route exact path="/terveys" render={() => <Health />} />
            <Route path="/terveys/painoindeksilaskuri" render={() => <BMICalc />} />
            <Route exact path="/yksikkomuuntimet" render={() => <Conversion />} />
            <Route path="/yksikkomuuntimet/pituusmuunnin" render={() => <LengthCon />} />
            <Route exact path="/ota-yhteytta" render={() => <ContactForm />} />
    </Route>
)