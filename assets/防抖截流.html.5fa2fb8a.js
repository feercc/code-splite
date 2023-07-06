import{_ as n,o as s,c as a,a as t}from"../app.8e823b68.mjs";const p={},e=t(`<h1 id="\u9632\u6296\u622A\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296\u622A\u6D41" aria-hidden="true">#</a> \u9632\u6296\u622A\u6D41</h1><h2 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h2><p>\u4E00\u4E2A\u6BD4\u8F83\u5B8C\u5584\u7684\u9632\u6296\uFF0C\u9632\u6296\u4E3B\u8981\u7528\u4E8E\u8FDE\u7EED\u70B9\u51FB\u4E4B\u540E\u76F8\u540C\u65F6\u95F4\u5185\u53EA\u89E6\u53D1\u4E00\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> value<span class="token punctuation">;</span>
  <span class="token keyword">return</span> value <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastArgs<span class="token punctuation">,</span> lastThis<span class="token punctuation">,</span> maxWait<span class="token punctuation">,</span> result<span class="token punctuation">,</span> timerId<span class="token punctuation">,</span> lastCallTime<span class="token punctuation">;</span>

  <span class="token keyword">let</span> lastInvokeTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> leading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> trailing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5728\u6CA1\u6709\u8BBE\u7F6Ewait\u7684\u60C5\u51B5\u4E0B\uFF0C\u5E76\u4E14\u6709requestAnimationFrame\u5219\u4F7F\u7528requestAnimationFrame\u65B9\u6CD5</span>
  <span class="token keyword">const</span> useRAF <span class="token operator">=</span>
    <span class="token operator">!</span>wait <span class="token operator">&amp;&amp;</span> wait <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> window<span class="token punctuation">.</span>requestAnimationFrame <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4F20\u5165\u7684\u53C2\u6570\u6821\u9A8C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> func <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Expected a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5C06wait\u8F6C\u6362\u6210\u6570\u5B57\uFF0C\u5982\u679C\u662FNaN\u5219\u8F6C\u6362\u62100</span>
  wait <span class="token operator">=</span> <span class="token operator">+</span>wait <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u4E00\u4E9B\u914D\u7F6E\u53C2\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    leading <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>leading<span class="token punctuation">;</span>
    maxing <span class="token operator">=</span> <span class="token string">&quot;maxWait&quot;</span> <span class="token keyword">in</span> options<span class="token punctuation">;</span>
    maxWait <span class="token operator">=</span> maxing <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">+</span>options<span class="token punctuation">.</span>maxWait <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span> <span class="token operator">:</span> maxWait<span class="token punctuation">;</span>
    trailing <span class="token operator">=</span> <span class="token string">&quot;trailing&quot;</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>trailing <span class="token operator">:</span> trailing<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6267\u884C\u51FD\u6570</span>
  <span class="token keyword">function</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> lastArgs<span class="token punctuation">;</span>
    <span class="token keyword">const</span> thisArg <span class="token operator">=</span> lastThis<span class="token punctuation">;</span>

    lastArgs <span class="token operator">=</span> lastThis <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    lastInvokeTime <span class="token operator">=</span> time<span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F00\u59CB\u8BA1\u65F6\u5668</span>
  <span class="token keyword">function</span> <span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token parameter">pendingFunc<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>useRAF<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>pendingFunc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>pendingFunc<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D6\u6D88\u8BA1\u65F6\u5668</span>
  <span class="token keyword">function</span> <span class="token function">cancelTimer</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>useRAF<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6267\u884C\u51FD\u6570</span>
  <span class="token keyword">function</span> <span class="token function">leadingEdge</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lastInvokeTime <span class="token operator">=</span> time<span class="token punctuation">;</span>
    timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> leading <span class="token operator">?</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">:</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8BA1\u7B97\u5269\u4F59\u65F6\u95F4</span>
  <span class="token keyword">function</span> <span class="token function">remainingWait</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> timeSinceLastCall <span class="token operator">=</span> time <span class="token operator">-</span> lastCallTime<span class="token punctuation">;</span>
    <span class="token keyword">const</span> timeSinceLastInvoke <span class="token operator">=</span> time <span class="token operator">-</span> lastInvokeTime<span class="token punctuation">;</span>
    <span class="token keyword">const</span> timeWaiting <span class="token operator">=</span> wait <span class="token operator">-</span> timeSinceLastCall<span class="token punctuation">;</span>

    <span class="token keyword">return</span> maxing
      <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>timeWaiting<span class="token punctuation">,</span> maxWait <span class="token operator">-</span> timeSinceLastInvoke<span class="token punctuation">)</span>
      <span class="token operator">:</span> timeWaiting<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u662F\u5426\u9700\u8981\u6267\u884C</span>
  <span class="token keyword">function</span> <span class="token function">shouldInvoke</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> timeSinceLastCall <span class="token operator">=</span> time <span class="token operator">-</span> lastCallTime<span class="token punctuation">;</span>
    <span class="token keyword">const</span> timeSinceLastInvoke <span class="token operator">=</span> time <span class="token operator">-</span> lastInvokeTime<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      lastCallTime <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span>
      timeSinceLastCall <span class="token operator">&gt;=</span> wait <span class="token operator">||</span>
      timeSinceLastCall <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span>
      <span class="token punctuation">(</span>maxing <span class="token operator">&amp;&amp;</span> timeSinceLastInvoke <span class="token operator">&gt;=</span> maxWait<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8BA1\u65F6\u5668\u5230\u671F</span>
  <span class="token keyword">function</span> <span class="token function">timerExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> time <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldInvoke</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">trailingEdge</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Restart the timer.</span>
    timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> <span class="token function">remainingWait</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ED3\u675F\u8BA1\u65F6\u5668</span>
  <span class="token keyword">function</span> <span class="token function">trailingEdge</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    timerId <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>trailing <span class="token operator">&amp;&amp;</span> lastArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    lastArgs <span class="token operator">=</span> lastThis <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D6\u6D88</span>
  <span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">cancelTimer</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    lastInvokeTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    lastArgs <span class="token operator">=</span> lastCallTime <span class="token operator">=</span> lastThis <span class="token operator">=</span> timerId <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ACB\u5373\u6267\u884C</span>
  <span class="token keyword">function</span> <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> timerId <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> result <span class="token operator">:</span> <span class="token function">trailingEdge</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u662F\u5426\u5728\u7B49\u5F85\u4E2D</span>
  <span class="token keyword">function</span> <span class="token function">pending</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> timerId <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9632\u6296\u51FD\u6570</span>
  <span class="token keyword">function</span> <span class="token function">debounced</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> time <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u662F\u5426\u9700\u8981\u6267\u884C</span>
    <span class="token keyword">const</span> isInvoking <span class="token operator">=</span> <span class="token function">shouldInvoke</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>

    lastArgs <span class="token operator">=</span> args<span class="token punctuation">;</span>
    lastThis <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    lastCallTime <span class="token operator">=</span> time<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isInvoking<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">leadingEdge</span><span class="token punctuation">(</span>lastCallTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>maxing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5728maxing\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5DF2\u7ECF\u6267\u884C\u8FC7leadingEdge\uFF0C\u5219\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u5269\u4F59\u65F6\u95F4</span>
        timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">invokeFunc</span><span class="token punctuation">(</span>lastCallTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timerId <span class="token operator">=</span> <span class="token function">startTimer</span><span class="token punctuation">(</span>timerExpired<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  debounced<span class="token punctuation">.</span>cancel <span class="token operator">=</span> cancel<span class="token punctuation">;</span>
  debounced<span class="token punctuation">.</span>flush <span class="token operator">=</span> flush<span class="token punctuation">;</span>
  debounced<span class="token punctuation">.</span>pending <span class="token operator">=</span> pending<span class="token punctuation">;</span>
  <span class="token keyword">return</span> debounced<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u622A\u6D41" tabindex="-1"><a class="header-anchor" href="#\u622A\u6D41" aria-hidden="true">#</a> \u622A\u6D41</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> leading <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">let</span> trailing <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> func <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Expected a function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    leading <span class="token operator">=</span> <span class="token string">&#39;leading&#39;</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>leading <span class="token operator">:</span> leading
    trailing <span class="token operator">=</span> <span class="token string">&#39;trailing&#39;</span> <span class="token keyword">in</span> options <span class="token operator">?</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>trailing <span class="token operator">:</span> trailing
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">debounce</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    leading<span class="token punctuation">,</span>
    trailing<span class="token punctuation">,</span>
    <span class="token string-property property">&#39;maxWait&#39;</span><span class="token operator">:</span> wait
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","\u9632\u6296\u622A\u6D41.html.vue"]]);export{r as default};
