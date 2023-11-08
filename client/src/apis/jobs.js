import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const addJob = `${backendUrl}/api/jobs/job-post`;
const getJobDetail = `${backendUrl}/api/jobs/job-description`;

const NewJobPost = async(newJob)=>{
    try{
        const reqPayload = {
            ...newJob,
        }
        console.log(reqPayload);
        const tkn = localStorage.getItem('UserToken');
        console.log(tkn);
        const response = await axios.post(addJob,reqPayload,{
            headers:{
                "Content-Type":'application/json',
                Authorization:tkn,
            },
        });
        console.log(response);
        return response;
}catch(err){
    console.log(err,'Couldnt add job post');
}
}

const jobDetails = async(jobId)=>{
    try {
        const response = await axios.get(`${getJobDetail}/${jobId}`);
        // console.log(response.data.data.location);
        return response;
    } catch (err) {
        console.log(err,'Couldnt get job');
    }
}

export {NewJobPost, jobDetails};