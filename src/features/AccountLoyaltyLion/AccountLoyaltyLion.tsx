import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useRef } from 'react';

export const AccountLoyaltyLion = () => {
  const tagRef = useRef();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const loyaltylion = window?.loyaltylion;

      if (!loyaltylion?.revision && !loyaltylion?._initData?.token) {
        loyaltylion?.init({
          token: process.env.NEXT_PUBLIC_LOYALTY_LION_TOKEN,
          customer: {
            id: session.user.id, // unique customer ID
            email: session.user.email // customer email address
          },
          auth: session.user.loyaltyLionAuth
        });
      }
    }
  }, [session?.shopifyCustomerAccessToken]);

  useEffect(() => {
    if (window?.loyaltylion?.ui && tagRef?.current?.children?.length < 1) {
      window.loyaltylion.dev.reloadThemeCss();
      window.loyaltylion.ui.refresh();
    }
  });

  useEffect(
    () => () => {
      window.loyaltylion = null;
    },
    []
  );

  return (
    <>
      <Head>
        <script>
          {`!function(t,n){var e=n.loyaltylion||[];if(!e.isLoyaltyLion){n.loyaltylion=e,void 0===n.lion&&(n.lion=e),e.version=2,e.isLoyaltyLion=!0;var o=n.URLSearchParams,i=n.sessionStorage,r="ll_loader_revision",a=(new Date).toISOString().replace(/-/g,""),s="function"==typeof o?function(){try{var t=new o(n.location.search).get(r);return t&&i.setItem(r,t),i.getItem(r)}catch(t){return""}}():null;c("https://sdk.loyaltylion.net/static/2/"+a.slice(0,8)+"/loader"+(s?"-"+s:"")+".js");var l=!1;e.init=function(t){if(l)throw new Error("Cannot call lion.init more than once");l=!0;var n=e._token=t.token;if(!n)throw new Error("Token must be supplied to lion.init");var o=[];function i(t,n){t[n]=function(){o.push([n,Array.prototype.slice.call(arguments,0)])}}"_push configure bootstrap shutdown on removeListener authenticateCustomer".split(" ").forEach(function(t){i(e,t)}),c("https://sdk.loyaltylion.net/sdk/start/"+a.slice(0,11)+"/"+n+".js"),e._initData=t,e._buffer=o}}function c(n){var e=t.getElementsByTagName("script")[0],o=t.createElement("script");o.src=n,o.crossOrigin="",e.parentNode.insertBefore(o,e)}}(document,window);`}
        </script>
      </Head>

      <div data-lion-account ref={tagRef}></div>
    </>
  );
};
