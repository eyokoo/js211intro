let students = [];

students.push({
  'name':'Jimbo',    
  'passing': false
});

students.push({    
  'name':'Jay',    
  'passing': true
});

  students.push({    
    'name':'Bob',    
    'passing': true
  });

    students.push({    
      'name':'McLain',    
      'passing': false
    });
    
    students.push({    
      'name':'Tool Man',    
      'passing': true
    });
    
    /** 
     * Use the filter method on the students array * to filter down to just the failing students *  
     * Then Use the foreach method on the failing students 
     * to print their name */
    
    
        let studentsFailing = students.filter((element, index) => {
          if(element['passing'] == false){
            return true;
          }
        //also if(element.passing)
        //return false
        })

        


