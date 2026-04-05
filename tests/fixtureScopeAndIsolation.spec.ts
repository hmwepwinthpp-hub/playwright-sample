import {test as base} from '@playwright/test'
let counter = 0

type WorkerFixtures = {
  counterFixture: number;
};

const test = base.extend<{} , WorkerFixtures>({
    counterFixture : [async({}, use)=> {
        counter ++
        await use(counter)
    },
    { scope: 'worker'}],
    
})

test ('Test 1', async({counterFixture})=> {
    console.log(`Test 1 counter : ${counterFixture}`)
})

test ('Test 2', async({counterFixture})=> {
    console.log(`Test 2 counter : ${counterFixture}`)
})