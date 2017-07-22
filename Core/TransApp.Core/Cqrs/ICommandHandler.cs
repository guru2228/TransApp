using System.Threading.Tasks;

namespace TransApp.Core.Cqrs
{
    /// <summary>
    /// Base interface for command handlers
    /// </summary>
    /// <typeparam name="TParameter"></typeparam>
    public interface ICommandHandler<in TParameter> where TParameter : ICommand
    {
        /// <summary>
        /// Executes a command handler
        /// </summary>
        /// <param name="command">The command to be used</param>
        Task<int> Execute(TParameter command);
    }

}
