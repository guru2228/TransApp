using System.Reflection;

namespace TransApp.Core.Helper
{
    public static class Helper
    {
        /// <summary>
        /// Get property of dynamic objects
        /// </summary>
        /// <param name="target"></param>
        /// <param name="propName"></param>
        /// <returns></returns>
        public static object ReflectPropertyValue(this object target, string propName)
        {
            return target.GetType().GetProperty(propName).GetValue(target, null);
        }
    }
}
