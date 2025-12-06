const employees = [
  { id: 1, name: "Amit Patel", role: "Developer", department: "IT", city: "Ahmedabad" },
  { id: 2, name: "Priya Shah", role: "Developer", department: "IT", city: "Rajkot" },
  { id: 3, name: "Rohan Mehta", role: "Designer", department: "UI/UX", city: "Surat" },
  { id: 4, name: "Nisha Rao", role: "HR Executive", department: "HR", city: "Ahmedabad" },
  { id: 5, name: "Vikas Kumar", role: "Developer", department: "IT", city: "Vadodara" },
  { id: 6, name: "Sneha Joshi", role: "Tester", department: "QA", city: "Rajkot" },
  { id: 7, name: "Jay Patel", role: "Developer", department: "IT", city: "Surat" },
  { id: 8, name: "Anjali Singh", role: "Manager", department: "HR", city: "Ahmedabad" },
  { id: 9, name: "Karan Shah", role: "Data Analyst", department: "Data", city: "Surat" },
  { id: 10, name: "Darshit Mal", role: "Tester", department: "QA", city: "Vadodara" },
  { id: 11, name: "Heena Parmar", role: "Designer", department: "UI/UX", city: "Rajkot" },
  { id: 12, name: "Sahil Gupta", role: "Developer", department: "IT", city: "Ahmedabad" },
  { id: 13, name: "Mitali Desai", role: "HR Executive", department: "HR", city: "Surat" },
  { id: 14, name: "Ravi Patel", role: "Developer", department: "IT", city: "Ahmedabad" },
  { id: 15, name: "Farhan Ali", role: "Data Analyst", department: "Data", city: "Vadodara" }
];
// Filter employees who are in the IT department
const it=employees.filter((emp)=>(emp.department==="IT")); 
console.log(it);
// Filter employees who are Developers
const dev=employees.filter((emp)=>(emp.role==="Developer")); 
console.log(dev);
// Filter employees located in Ahmedabad and role is Developer  
const set1=employees.filter((emp)=>(emp.city==="Ahmedabad"&& emp.role==="Developer")); 
console.log(set1);
// Filter employees located in Surat
const surat=employees.filter((emp)=>
{
  return emp.city==="Surat"
}); 
console.log(surat);

