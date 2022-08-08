// /sidebar number 1

fetch("https://raw.githubusercontent.com/Tokimitondrasoa-Francklin-II/GeospatialePro/main/data/01_firemaps/firemap.json")
  .then((response) => response.json())
  .then((presetAreas) => {
    console.table(presetAreas);

    function subItem2(subItem2) {
      return `
              ${subItem2
                .map(function (subItem2Data) {
                  return `
                <a class="sub-item2"><i class="fa fa-fire-alt small text-danger"></i> ${subItem2Data.title}</a>
                `;
                })
                .join("")}
            
            `;
    }

    document.querySelector(".sub-menu").innerHTML = `
      
        ${presetAreas
          .map(function (subitem) {
            return `   
              <a class="sub-item"><i class="fa fa-caret-right dropdown"></i> ${
                subitem.title
              }</a>
                <div class="sub-menu2">
                    ${subitem.childrens ? subItem2(subitem.childrens) : ""}
                </div>
              
              `;
          })
          .join("")}

      
      `;
  });

// /sidebar number 2

fetch("https://raw.githubusercontent.com/Tokimitondrasoa-Francklin-II/GeospatialePro/main/data/02_trackFires/trackFires.json")
  .then((response) => response.json())
  .then((FiresData) => {
    console.log(FiresData);
    console.log(FiresData.length);
    // console.table(FiresData)

    function spreadFireTracker(spreadTracker) {
      return `

                ${spreadTracker
                  .map(function (spreadFire) {
                    return `

                           
                              <a class='spreadfire'><i class='${spreadFire.icon}'></i> ${spreadFire.title}</a>
                           
                          `;
                  })
                  .join("")}
              
              `;
    }

    function tracker2(iconbtn) {
      return `${iconbtn}`;
    }
    function FireTrackers(fireTracker) {
      return `
                    
                    <div class="item subtitle ">
                      ${fireTracker
                        .map(function (tracker) {
                          return `
                      <a class="sub-btn"><i class="${
                        tracker.icon ? tracker2(tracker.icon) : ""
                      }"></i>${tracker.title} </a>

                          ${
                            tracker.children
                              ? spreadFireTracker(tracker.children)
                              : ""
                          }

                          `;
                        })
                        .join("")}

                    </div>
                    
                    `;
    }

    document.querySelector("#sidebar2").innerHTML = `

        ${FiresData.map(function (Fires) {
          return `
          
            <div id="title${FiresData.length++}" style="font-weight:bold" class="item sidebar2">
              <a>${Fires.title}<i class="${Fires.icon} dropdownOne"></i></a>
            </div>
            ${Fires.children ? FireTrackers(Fires.children) : ""}
          
          `;
        }).join("")}
    
    `;
  });

// sidebar 3

fetch("https://raw.githubusercontent.com/Tokimitondrasoa-Francklin-II/GeospatialePro/main/data/03_fireHistory/fireHistories.json")
  .then((response) => response.json())
  .then((fireHistoryData) => {
    console.log(fireHistoryData);

    function fireHistories(fireHistory) {
      return `
          
          <div class="item subtitle">
          
            ${fireHistory
              .map(function (dateOfHistory) {
                return `
              
            <a class="sub-btn"><i class="dropdown"></i> ${
              dateOfHistory.title
                ? dateOfHistory.title
                : `
              <input type='checkbox' name='${dateOfHistory.CheckList}' value='${dateOfHistory.CheckList}' style='cursor:pointer; margin-right:7px'>
              ${dateOfHistory.CheckList}
              </input>`
            }
              
              </a>
              
              `;
              })
              .join("")}
         
          </div>
          
          `;
    }

    document.querySelector("#sidebar3").innerHTML = `
        
                ${fireHistoryData
                  .map(function (histories) {
                    return `

                    <div id="title${
                      fireHistoryData.length++ + 6
                    }" style="font-weight:bold" class="item sidebar3">
                      
                      <a> ${
                        histories.title
                      } <i class="${histories.icon} dropdownOne"></i></a>
                      
                    </div>
                    ${
                      histories.children
                        ? fireHistories(histories.children)
                        : ""
                    }

                        `;
                  })
                  .join("")}
    `;
  });


  
    // Sisebar 4

    fetch("https://raw.githubusercontent.com/Tokimitondrasoa-Francklin-II/GeospatialePro/main/data/04_Data/datas.json")
    .then(response => response.json())
    .then(dataCatalogue => {console.log(dataCatalogue)
    
        function fireDatabase(fireArchive){
          return `
          
          <div class="item subtitle">
      
            ${fireArchive.map(function(archive){
                        return `

            <a class="sub-btn"><i class="dropdown"></i> ${archive.title} </a>
                        
                        `
              }).join('')}

          </div>
             
          
          `
        }
      document.querySelector('#sidebar4').innerHTML =`
      
              ${dataCatalogue.map(function(catalogue){
                return `
                
                <div id="title${dataCatalogue.length++ +20}" style="font-weight:bold" class="item sidebar4">
                  
                  <a>${catalogue.title} <i class="fa fa-question-circle dropdownOne"></i></a>
                </div>
                ${catalogue.children? fireDatabase(catalogue.children):''}
                
                
                `
              }).join('')}
      
      `    
    
    })


     // SIDEBAR 6

     fetch("https://raw.githubusercontent.com/Tokimitondrasoa-Francklin-II/GeospatialePro/main/data/06_TOOLS/06_tools.json")
     .then(response => response.json())
     .then(dataMapTools =>{console.log(dataMapTools)
     
                             function simpleMapToolItem(singleItem){
                               return `
 
  <a class="sub-item"><i class="${singleItem.icon? singleItem.icon:''} dropdown"></i> ${singleItem} </a>
  
                               `
                             }
             function mapLayersTools(mapLayers){
               return `
               
               <div class="sub-menu">
                       ${mapLayers.title? simpleMapToolItem(mapLayers.title): mapLayers.map(function(mapLayerItem){
 
                             
                         if (mapLayerItem.radioCheckList){
                                     return `
                                           
                                     <a class="sub-item"><i class="dropdown"></i> 
                                       <input type='radio' name='' value=''>
                                         <input type='checkbox' name='' value=''>
                                           ${mapLayerItem.radioCheckList} 
                                         </input>
                                       </input>     
                                     </a>
                                
                                     
                                     `
                                   }
                           else if (mapLayerItem.CheckList){
 
                                   return `
 
                                   <a class="sub-item"><i class="dropdown"></i> 
                                  
                                     <input type='checkbox' name='' value='' style='margin-left:18px'>
                                       ${mapLayerItem.CheckList} 
                                     </input>
                               
                                   </a>             
                                   `
                           }else{
                                   return `
                                  
         <a class="sub-item"><i class="dropdown"></i> ${mapLayerItem.title}</a>
                                   
                                   `
                           }
 
                       }).join('')}                  
               </div>
               
               `
             }
 
 
             function OneArray(OneArrayItem){
                     return `
                     
                     <a class="sub-btn dropdown6"><i class="${OneArrayItem.icon? OneArrayItem.icon:''} dropdown"></i> ${OneArrayItem} </a>
   
                     `
                   }
             function toolsItem(toolItem){
               return `
               
               <div class="item subtitle">
                 ${toolItem.title? OneArray(toolItem.title): toolItem.map(function(tool){
                       return`
                       
                       <a class="sub-btn dropdown6"><i class="${tool.icon? tool.icon:''} dropdown" ></i> ${tool.title} </a>
                           ${tool.childrens? mapLayersTools(tool.childrens):''}
                       `
                 }).join("")}
               </div>
               
               `
             }
 
       document.querySelector('#sidebar6').innerHTML =`
       
         ${dataMapTools.map(function(mapTools){
           return `
           
           <div id="title${dataMapTools.length++ +300}" style="font-weight:bold" class="item sidebar6">
             <a> ${mapTools.title} <i class="fa fa-question-circle dropdownOne"></i></a>
           </div>
 
           ${mapTools.childrens? toolsItem(mapTools.childrens):''}
       
           `
         }).join('')}
       
       
       `
     
     
     
     })
