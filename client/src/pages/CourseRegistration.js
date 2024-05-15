import {useState} from "react";

const CourseRegistration = ({web3, courseContract, courseFee}) => {
    const [email, setEmail] = useState('');

    const payForCourse = async () => {
        if (!web3 || !courseContract) return;

        const accounts = await web3.eth.getAccounts();
        courseContract.methods.payForCourse(email).send({ from: accounts[0], value: web3.utils.toWei(courseFee, 'ether') })
            .on('transactionHash', hash => {
                console.log('Transaction hash:', hash);
            })
            .on('receipt', receipt => {
                console.log('Transaction successful:', receipt);
            })
            .on('error', error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="registration-ui">
            Ace IntraDay Trading
            <br/>
            <h4>Kiran Kumar</h4>
            <p>Rent Fee: {courseFee} ETH</p>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={payForCourse}>Rent my strategy</button>
        </div>
    );
}

export default CourseRegistration;