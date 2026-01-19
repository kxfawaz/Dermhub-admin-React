const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function getToken(){
  return localStorage.getItem("token")
}

async function apiFetch(path, options ={}){
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
  };
  // if token exists set headers.auth to be bearer and token 
  if(token){
    headers.Authorization = `Bearer ${token}`;
  }
  
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers
  });
  return res ;
}


// Helper to fetch all Consultations information and display it on the admin page
export async function fetchConsultations() {
  const res = await apiFetch("/api/consultations");
  return res.json();
}


// Helper to fetch 1 consultation with a specific id
export async function fetchConsultation(id){
  const res = await apiFetch(`/api/consultations/${id}`);
  return res.json()
}




// Helper to fetch ALL MAIN questions(non followup questions)
export async function fetchQuestions(){
  const res = await apiFetch(`/api/questions`);
  return res.json()
}


// Helper to fetch 1 main question by id 
export async function fetchMainQuestion(id){
  const res = await apiFetch(`/api/questions/${id}`);
  return res.json()
}


// Helper to create a main question

export async function addMainQuestion(data){
  const res = await apiFetch("/api/questions", {
    method: "POST",
    body: JSON.stringify(data)
  })
  return res.json()
}


export async function addFollowupQuestion(parentId,data){
  const res = await apiFetch(`/api/questions/${parentId}/followups`,{
    method: "POST",
    body: JSON.stringify(data)
  })
  return res.json()

}

// Helper to update a main question
export async function updateMainQuestion(id,data){
  const res = await apiFetch(`/api/questions/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data)
  });
  return res.json()
}


// Helper to update followup question
export async function updateFollowupQuestion(id,data){
  const res = await apiFetch(`/api/followups/${id}`,{
    method: "PATCH",
    body: JSON.stringify(data)
  });
  return res.json()


  }


  // Helper to delete a main question

  export async function deleteMainQuestion(id){
    const res = await apiFetch(`/api/questions/${id}`,{
      method: "DELETE",
    });
    return res.json()
  }


  // Helper to delete a followup question

  export async function deleteFollowupQuestion(id){
    const res = await apiFetch(`/api/followups/${id}`,{
      method: "DELETE",
    })
    return res.json()
  }
