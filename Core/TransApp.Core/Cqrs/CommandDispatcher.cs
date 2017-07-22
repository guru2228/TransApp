namespace TransApp.Core.Cqrs
{
    public class CommandDispatcher : ICommandDispatcher
    {
        //  private readonly IReadOnlyKernel _kernel;

        public CommandDispatcher() //IReadOnlyKernel kernel)
        {
            //if (kernel == null)
            //{
            //    throw new ArgumentNullException(nameof(kernel));
            //}
            //_kernel = kernel;
        }

        public void Dispatch<TParameter>(TParameter command) where TParameter : ICommand
        {
            //var handler = null; //_kernel.Get<ICommandHandler<TParameter>>();
            //  handler.Execute(command);
        }
    }
}