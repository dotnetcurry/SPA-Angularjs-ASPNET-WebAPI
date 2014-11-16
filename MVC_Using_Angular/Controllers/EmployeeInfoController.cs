using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Using_Angular.Controllers
{
    public class EmployeeInfoController : Controller
    {
        // GET: EmployeeInfo
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddNewEmployee()
        {
            return PartialView("AddEmployee");
        }
        public ActionResult ShowEmployees()
        {
            return PartialView("ShowEmployees");
        }

        public ActionResult EditEmployee()
        {
            return PartialView("EditEmployee");
        }

        public ActionResult DeleteEmployee()
        {
            return PartialView("DeleteEmployee");
        }
    }
}