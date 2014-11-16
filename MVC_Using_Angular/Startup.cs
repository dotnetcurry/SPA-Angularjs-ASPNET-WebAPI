using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Using_Angular.Startup))]
namespace MVC_Using_Angular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
