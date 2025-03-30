import React, { useState } from 'react'
import B from './B'

export default function A() {

    const [NewsHeader,setNewsHeader]=useState('Befor and after satallite images show scale of distruction in mayamar 7.7 magnitude earthquick');
    const [Newfeed, setNewfeed]=useState('Newly realse setellite images have expose the full content devestatio in mayamar following a powerfull 7.7 mangnitude earthquick');
    const [Newsfeed2, newNewsfeed2]=useState('अमेरिकी संविधान के प्रावधानों के मुताबिक देश के शीर्ष संवैधानिक पद पर अधिकतम दो कार्यकाल ही मिल सकते हैं। संविधान के 22वें संशोधन के बाद से अमेरिका में यही नियम है। अब वर्तमान राष्ट्रपति डोनाल्ड ट्रंप ने कहा है कि वे तीसरी बार राष्ट्रपति पद संभालने को लेकर गंभीर हैं। वे मजाक नहीं कर रहे हैं। ट्रंप ने कहा, ऐसा करने के कई तरीके हैं।');
    const [Newsfeed3,setNewsFeed3]=useState('Sikandar Day 1 BO Collection: करियर में 10 साल पीछे पहुंचे सलमान खान, पहले दिन नहीं चला ‘सिकंदर’ का सिक्का');

  return (
    <React.Fragment>
        <h1> {NewsHeader} </h1>
        <B name={Newfeed} newname={Newsfeed2} New3={Newsfeed3} />
    </React.Fragment>
  )
}
