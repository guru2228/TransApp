using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TransApp.Core.Helper
{
    public class PasswordHashingService
    {
        public static string HashSha2String(string valueToHash)
        {
            try
            {
                var x = SHA256.Create();
                byte[] bs = Encoding.UTF8.GetBytes(valueToHash);
                bs = x.ComputeHash(bs);

                var s = new StringBuilder();
                foreach (byte b in bs)
                {
                    s.Append(b.ToString("x2").ToLower());
                }
                return s.ToString();
            }
            catch (PlatformNotSupportedException)
            {
                return valueToHash;
            }
        }
    }
}
