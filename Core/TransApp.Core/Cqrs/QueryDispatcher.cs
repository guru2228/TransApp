using System;

namespace TransApp.Core.Cqrs
{
    public class QueryDispatcher : IQueryDispatcher
    {
      //  private readonly IReadOnlyKernel _kernel;

        public QueryDispatcher()//IReadOnlyKernel kernel)
        {
            //if (kernel == null)
            //{
            //    throw new ArgumentNullException("kernel");
            //}
            //_kernel = kernel;
        }

        public TResult Dispatch<TParameter, TResult>(TParameter query)
            where TParameter : IQuery
            where TResult : IQueryResult
        {
            throw new NotImplementedException();
        }

        //public TResult Dispatch<TParameter, TResult>(TParameter query)
        //    where TParameter : IQuery
        //    where TResult : IQueryResult
        //{
        //  //  var handler = _kernel.Get<IQueryHandler<TParameter, TResult>>();
        //   // return ((TResult)null);//handler.Retrieve(query);
        //}

    }
}