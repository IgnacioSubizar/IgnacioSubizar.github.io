<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            <script src="https://unpkg.com/vue/dist/vue.js"></script>
    </head>
    <body class="bg-light">
         <header class="mt-2">    
             <div class="container-fluid">
                   <span class=" float-left">
                        <h2 class="mr-2 mt-1"> <img src="tgiflogo.webp" alt="Logo" class="rounded-circle" width="60" height="45">TGIF
                        </h2> 
                    </span>
                    <span class="float-right pt-3 ml-2">
                        <h6><a href="mailto:info@tgif.net">info@tgif.net</a>
                        </h6>
                    </span>
                    <nav class="navbar navbar-expand-sm border border-dark bg-info navbar-light">
                       <ul class="navbar-nav">
                           <li class="nav-item">
                                 <a class="nav-link text-white" href="home.html">Home</a>
                           </li>
                                        <!-- Dropdown -->
                           <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">Congress 113</a>
                                  <div class="dropdown-menu">
                                          <a class="dropdown-item" href="house_data.html">House</a>
                                          <a class="dropdown-item" href="senate_data.html">Senate</a>
                                  </div>
                           </li>
                           <li class="nav-item dropdown">
                                     <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown"> Attendance</a>
                                     <div class="dropdown-menu">
                                              <a class="dropdown-item" href="house_attendance.html">House</a>
                                              <a class="dropdown-item" href="senate_attendance.html">Senate</a>
                                     </div>
                           </li>
                           <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">Party Loyalty </a>
                                  <div class="dropdown-menu">
                                        <a class="dropdown-item" href="house_party_loyalty.html">House</a>
                                        <a class="dropdown-item" href="senate_party_loyalty.html">Senate</a>
                                  </div>
                           </li>
                       </ul>      
                    </nav> 
             </div>          
         </header>
         <br> 
         <!--Table container-->
         <div class="container-fluid">
                <h2>About Us</h2>
                <div class="row">
                        <div class="col-sm-8" ><p>Openness, accountability, and honesty define government transparency. In a free society, transparency is government's obligation to share information with citizens. It is at the heart of how citizens hold their public officials accountable. Here at TGIF we believe that government should be transparent.</p>  
                            <p>Governments exist to serve the people. Information on how officials conduct the public business and spend taxpayer money must be readily available and easily understood. This transparency allows good and just governance.  Transparency promotes accountability and provides information for citizens about what their Government is doing.</p>  
                            <p>We also believe that government should be participatory. Public engagement enhances the Government's effectiveness and improves the quality of its decisions. Knowledge is widely dispersed in society, and public officials benefit from having access to that dispersed knowledge. We invite you to use our site to become actively engaged in American government.</p>
                            <p>TGIF works to disclose information in forms that the public can readily find and use. We solicit public feedback to identify information of greatest use to the public.</p>
                        </div>
                        <div class="col-sm-4" ><img src="hpimg.jpg" class="float-right " alt="img principal" width="460" height="345"></div>
                               <div id="accordion">
                                    <div class="card mx-3">
                                         <div class="card-header">
                                               <a class="card-link" data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                  Read More
                                                </a>
                                          </div>
                                          <div id="collapseOne" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                     <h4> Background History of Government Transparency</h4>
                                                      <p>In the West, the idea that government should be open to public scrutiny and susceptible to public opinion dates back at least to the time of the Enlightenment, when many philosophes made an attack on absolutist doctrine of state secrecy, a core part of their intellectual project. The passage of formal legislative instruments to this end can also be traced to this time with Sweden, for example, (which then included Finland as a Swedish-governed territory) enacting free press legislation as part of its constitution (Freedom of the Press Act, 1766). This approach, and that of the philosophes more broadly, is strongly related to recent historiography on the eighteenth-century public sphere.
                                                        Influenced by Enlightenment thought, the revolutions in America (1776) and France (1789), freedom of the press enshrined provisions and requirements for public budgetary accounting and freedom of the press in constitutional articles. In the nineteenth century, attempts by Metternichean statesmen to row back on these measures were vigorously opposed by a number of eminent liberal politicians and writers, Bentham, Mill and Acton prominent among the latter.
                                                        Open government is widely seen to be a key hallmark of contemporary democratic practice and is often linked to the passing of freedom of information legislation. Scandinavian countries claim to have adopted the first freedom of information legislation, dating the origins of its modern provisions to the eighteenth century and Finland continuing the presumption of openness after gaining independence in 1917, passing its Act on Publicity of Official Documents in 1951 (superseded by new legislation in 1999).
                                                        The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs, Access to Information Acts (AIAs) or equivalent laws were passed in Denmark and Norway in 1970.</p>
                                                </div>
                                            </div>
                                        </div>            
                                 </div>  
                            </div>
                  </div>
          </div>
           <!-- Copyright -->
         <br>
         <div class="container-fluid">
            <footer>
              <div class="footer-copyright text-center py-3 mb-2 border border-dark bg-info ">© 2016 TGIF | All Rights Reserved
              </div>
            </footer>   
         </div>
          <!-- Copyright -->
</body>
</html>
