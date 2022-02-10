import { useState, useEffect } from 'react';

const useFindState = (testId, stateTests) => {

    const [stateComponent, setStateComponent] = useState({
        "id": '',
        "name": "",
        "type": "",
        "status": "",
        "siteId": '',
    })
    useEffect(() => {
        if (testId != undefined) {
            let obj = stateTests.find(item => item.id === Number(testId));
            if (obj != undefined) {
                setStateComponent(obj);
            } else {
                setStateComponent({
                    "id": '',
                    "name": "Object not found. Go back to Dashboard!",
                    "type": "",
                    "status": "",
                    "siteId": '',
                })
            }
        }
    }, [])

    return stateComponent
}
export default useFindState