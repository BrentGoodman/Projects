
<h1 id="top"> Common Libraries</h2>
<br>

***

<br>

1. **[Containers Library](#container)**
2. **[Algorithm Library](#algorithm)**
3. **[Mathematical Function Library](#math)**

<br>

***

<br>

<h3 id="container">Containers Library</h3>

<br>

<p><strong>Vector-</strong> A vector is a sequence container class that implements a dynamic array, which means that the size of the array automatically changes when appending elements. A vector stores the elements in contiguous memory locations and allocates the memory as needed at run time.</p>

<br>

#### Certain functions associated with the vector are:

<ol>
    <li><strong>begin() –</strong> Returns an iterator pointing to the first element in the vector</li>
    <li><strong>end() – </strong>Returns an iterator pointing to the theoretical element that follows the last element
        in the vector</li>
    <li><strong>rbegin() – </strong>Returns a reverse iterator pointing to the last element in the vector (reverse
        beginning). It moves from last to first element</li>
    <li><strong>rend() – </strong>Returns a reverse iterator pointing to the theoretical element preceding the first
        element in the vector (considered as the reverse end)</li>
    <li><strong>cbegin() –</strong> Returns a constant iterator pointing to the first element in the vector.</li>
    <li><strong>cend() – </strong>Returns a constant iterator pointing to the theoretical element that follows the
        vector’s last element.</li>
    <li><strong>crbegin() –</strong> Returns a constant reverse iterator, pointing to the vector’s last element (reverse
        beginning). It moves from last to first element</li>
    <li><strong>crend() –</strong> Returns a constant reverse iterator pointing to the theoretical element preceding the
        first element in the vector (considered as the reverse end)</li>
    <li><strong>push_back() -</strong> It adds a new element at the end.</li>
    <li><strong>pop_back() -</strong> It removes the last element from the vector.</li>
    <li><strong>clear() -</strong> It removes all the elements of the vector.</li>
</ol>

<br>

<h3>Example</h3>

<br>

<pre>
<code
class="language-cpp hljs"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;vector&gt;</span></span>
<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">vector</span> &lt; <span class="hljs-keyword">int</span> &gt; v;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.push_back(i);
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Output of begin and end: "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span> i = v.begin(); i != v.end(); ++i)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; * i &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;v.pop_back();
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"\nOutput after pop: "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span> i = v.begin(); i != v.end(); ++i)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; * i &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"\nOutput of rbegin and rend: "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span> ir = v.rbegin(); ir != v.rend(); ++ir)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; * ir &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"\nOutput of crbegin and crend : "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span> ir = v.crbegin(); ir != v.crend(); ++ir)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; * ir &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
 }
 
 
 
 
Output:
Output of begin <span class="hljs-keyword">and</span> end: <span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span> <span class="hljs-number">4</span> <span class="hljs-number">5</span> 
Output after pop: <span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span> <span class="hljs-number">4</span> 
Output of rbegin <span class="hljs-keyword">and</span> rend: <span class="hljs-number">4</span> <span class="hljs-number">3</span> <span class="hljs-number">2</span> <span class="hljs-number">1</span> 
Output of crbegin <span class="hljs-keyword">and</span> crend : <span class="hljs-number">4</span> <span class="hljs-number">3</span> <span class="hljs-number">2</span> <span class="hljs-number">1</span> </code>

</pre>

<br>

***

<br>

<h3 id="algorithm"> Algorithm Library </h3>

<br>

<p> The header algorithm defines a lot of commonly used algorithms. They provide various operations for containers. Some well-known algorithms are:</p>

<br>

<p>To use <strong>algorithms</strong> – include &lt;algorithm&gt; header or you can simply use &lt;bits/stdc++.h&gt; header file.</p>

<br>

<ul><li>sort(first_iterator, last_iterator) — for sorting.</li><li>binary_search(first_iterator, last_iterator,x) — for searching element</li><li>reverse(first_iterator, last_iterator) – to reverse</li><li>*max_element (first_iterator, last_iterator) – to find the maximum element</li><li>*min_element (first_iterator, last_iterator) – to find the minimum element</li><li>accumulate(first_iterator, last_iterator, initial value of sum) – Does the summation</li><li>count(first_iterator, last_iterator,x) – to count the occurrences of x</li><li>find(first_iterator, last_iterator, x) – checks if element is present or not.</li><li>lower_bound(first_iterator, last_iterator, x) – returns an iterator pointing to the first element in the range [first,last) which has a value not less than ‘x’.</li><li>upper_bound(first_iterator, last_iterator, x) – returns an iterator pointing to the first element in the range [first,last)&nbsp; which has a value greater than ‘x’.</li></ul>

<br>

<p><strong>Syntax: Ascending order</strong></p>
<pre><code class="language-cpp hljs">sort(first, last);</code></pre>

<br>

<p><strong>Syntax: Descending order</strong></p>
<pre><code class="language-cpp hljs">sort(first, last, greater());</code></pre>

<br>

<p><strong>Example: Sort array in ascending order.</strong></p>
<br>
<pre><code class="language-cpp hljs"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;bits/stdc++.h&gt;</span></span>
<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">int</span> arr[] = {<span class="hljs-number">10</span>, <span class="hljs-number">35</span>, <span class="hljs-number">85</span>, <span class="hljs-number">93</span>, <span class="hljs-number">62</span>, <span class="hljs-number">77</span>, <span class="hljs-number">345</span>, <span class="hljs-number">43</span>, <span class="hljs-number">2</span>, <span class="hljs-number">10</span>}; 
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">int</span> n = <span class="hljs-number">10</span>;
 &nbsp;&nbsp;&nbsp;sort(arr, arr + n);
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Sorted array: "</span> &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; n; i++)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; arr[i] &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}

Output:
Sorted <span class="hljs-built_in">array</span>: 
<span class="hljs-number">2</span> <span class="hljs-number">10</span> <span class="hljs-number">10</span> <span class="hljs-number">35</span> <span class="hljs-number">43</span> <span class="hljs-number">62</span> <span class="hljs-number">77</span> <span class="hljs-number">85</span> <span class="hljs-number">93</span> <span class="hljs-number">345</span> </code></pre>

<br>

<strong>Example: Sort array in descending order.</strong>

<br>

<pre><code class="language-cpp hljs"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;bits/stdc++.h&gt;</span></span>
<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">int</span> arr[] = {<span class="hljs-number">10</span>, <span class="hljs-number">35</span>, <span class="hljs-number">85</span>, <span class="hljs-number">93</span>, <span class="hljs-number">62</span>, <span class="hljs-number">77</span>, <span class="hljs-number">345</span>, <span class="hljs-number">43</span>, <span class="hljs-number">2</span>, <span class="hljs-number">10</span>}; 
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">int</span> n = <span class="hljs-number">10</span>;
 &nbsp;&nbsp;&nbsp;sort(arr, arr + n, greater &lt; <span class="hljs-keyword">int</span> &gt; ());
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Sorted array: "</span> &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; n; i++)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; arr[i] &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}



Output:
Sorted <span class="hljs-built_in">array</span>: 
<span class="hljs-number">345</span> <span class="hljs-number">93</span> <span class="hljs-number">85</span> <span class="hljs-number">77</span> <span class="hljs-number">62</span> <span class="hljs-number">43</span> <span class="hljs-number">35</span> <span class="hljs-number">10</span> <span class="hljs-number">10</span> <span class="hljs-number">2</span>&nbsp;</code></pre>

<br>

<strong>Example: Sort vector in ascending order.</strong>

<br>

<pre><code class="language-cpp hljs"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;bits/stdc++.h&gt;</span></span>
<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">vector</span> &lt; <span class="hljs-keyword">int</span> &gt; v = {<span class="hljs-number">10</span>, <span class="hljs-number">35</span>, <span class="hljs-number">85</span>, <span class="hljs-number">93</span>, <span class="hljs-number">62</span>, <span class="hljs-number">77</span>, <span class="hljs-number">345</span>, <span class="hljs-number">43</span>, <span class="hljs-number">2</span>, <span class="hljs-number">10</span>}; 
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">int</span> n = <span class="hljs-number">10</span>;
 &nbsp;&nbsp;&nbsp;sort(v.begin(), v.end());
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Sorted vector: "</span> &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; n; i++)
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; v[i] &lt;&lt; <span class="hljs-string">" "</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}



Output:
Sorted <span class="hljs-built_in">vector</span>: 
<span class="hljs-number">2</span> <span class="hljs-number">10</span> <span class="hljs-number">10</span> <span class="hljs-number">35</span> <span class="hljs-number">43</span> <span class="hljs-number">62</span> <span class="hljs-number">77</span> <span class="hljs-number">85</span> <span class="hljs-number">93</span> <span class="hljs-number">345</span></code></pre>

<br>

<p><strong>ii) binary_search()- </strong>The C++ builtin functions in C++ STL returns Boolean true if the element is present in the given range, else Boolean false is returned. It requires the vector to be sorted before the search is applied. This algorithm’s main idea is to keep dividing the vector in half (divide and conquer) until the element is found or all the elements are exhausted. There are two variations of binary_search() they are as follows:</p>

<br>

<strong>Syntax1:</strong>
<pre>
<code class="language-cpp hljs">binary_search(first, last, value);</code>
</pre>

<strong>Syntax2:</strong>

<pre>
<code class="language-cpp hljs">binary_search(first, last, value, compare_function);</code>
</pre>


<strong>Example:</strong>

<br>

<pre><code class="language-cpp hljs"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;bits/stdc++.h&gt;</span></span>
<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">bool</span> <span class="hljs-title">compare_string_by_length</span><span class="hljs-params">(<span class="hljs-built_in">string</span> i, <span class="hljs-built_in">string</span> j)</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span> (i.size() == j.size());
}


<span class="hljs-comment">//Main Code</span>
<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">vector</span> &lt; <span class="hljs-keyword">int</span> &gt; v = {<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">5</span>, <span class="hljs-number">9</span>, <span class="hljs-number">4</span>};
 &nbsp;&nbsp;&nbsp;sort(v.begin(), v.end());
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; binary_search(v.begin(), v.end(), <span class="hljs-number">7</span>); <span class="hljs-comment">//prints 1 , Boolean true</span>
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; binary_search(v.begin(), v.end(), <span class="hljs-number">217</span>); <span class="hljs-comment">//prints 0 , Boolean false</span>
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">vector</span> &lt; <span class="hljs-built_in">string</span> &gt; s = {<span class="hljs-string">"test"</span>, <span class="hljs-string">"abcde"</span>, <span class="hljs-string">"efghijkl"</span>, <span class="hljs-string">"abc"</span>};
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; binary_search(s.begin(), s.end(), <span class="hljs-string">"abcd"</span>, compare_string_by_length);
 &nbsp;&nbsp;&nbsp;<span class="hljs-comment">/* search for the string in s which have same length as of "abcd" */</span>
}

Output:
<span class="hljs-number">101</span></code></pre>

<br>
<p><strong>iii) reverse() –</strong> It reverses the vector.</p>

<strong>Syntax1:</strong>

<pre>
<code class="language-cpp hljs">reverse(first, last)</code>
</pre>

<br>
<p><strong>iv) *max_element () –</strong> &nbsp;To find the maximum element of a vector.</p>

<strong>Syntax1:</strong>

<pre><code class="language-cpp hljs">*max_element(first, last)</code></pre>

<br>

<p><strong>v) *min_element () –</strong> &nbsp;To find the minimum element of a vector.</p>

<strong>Syntax1:</strong>

<pre><code class="language-cpp hljs">*min_element(first, last)</code></pre>

<br>

<p><strong>vi) accumulate() –</strong> Does the summation of vector elements.</p>

<strong>Syntax1:</strong>

<pre>

<code class="language-cpp hljs">accumulate(first, last, x)</code>

</pre>

<br>

<p><strong>vii) count() –</strong> To count the occurrences of x in vector.</p>

<strong>Syntax1:</strong>

<pre>
<code class="language-cpp hljs">count(first, last, x)</code>
</pre>

<br>

<p><strong>viii) find() –</strong> Returns an iterator to the first occurrence of x in the vector and points to the vector’s last address.</p>

<strong>Syntax1:</strong>

<pre>
<code class="language-cpp hljs">find(first, last, x)</code>
</pre>

<br>

<p><strong>ix) lower_bound() –</strong>It&nbsp; returns an iterator pointing to the first element in the range [first, last) which has a value not less than ‘x’.</p>

<strong>Syntax1:</strong>

<pre>
<code class="language-cpp hljs">lower_bound(first, last, x)</code>
</pre>

<br>

<p><strong>x)&nbsp; upper_bound() –</strong> It returns an iterator pointing to the first element in the range [first,last)&nbsp; which has a value greater than ‘x’.</p>

<strong>Syntax1:</strong>

<pre>
<code class="language-cpp hljs">upper_bound(first, last, x)</code>
</pre>

<br>

***

<br>

<h3 id="math"> Mathematical Function Library </h3>

<br>

<p>In order to use these functions you need to include header file- &lt;math.h&gt; or &lt;cmath&gt;.</p>
<strong>cmath- </strong>It declares a set of functions to compute common mathematical operations and transformations some of them are:</p> 

+ pow()
+ sqrt() 
+ round() 
+ sin() 
+ cos()
+ tan()
+ floor()
+ ceil()
+ abs()

<br>

<strong>Example:</strong>

<pre><code class="language-cpp hljs"><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;cmath&gt;</span></span>
<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">double</span> x = <span class="hljs-number">5</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Sine value of x=5 : "</span> &lt;&lt; <span class="hljs-built_in">sin</span>(x) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Cosine value of x=5 : "</span> &lt;&lt; <span class="hljs-built_in">cos</span>(x) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Tangent value of x=5 : "</span> &lt;&lt; <span class="hljs-built_in">tan</span>(x) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">double</span> y = <span class="hljs-number">4</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Square root value of y=4 : "</span> &lt;&lt; <span class="hljs-built_in">sqrt</span>(y) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">int</span> z = <span class="hljs-number">-10</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Absolute value of z=-10 : "</span> &lt;&lt; <span class="hljs-built_in">abs</span>(z) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Power value: x^y = (5^4) : "</span> &lt;&lt; <span class="hljs-built_in">pow</span>(x, y) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;x = <span class="hljs-number">4.56</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Floor value of x=4.56 is : "</span> &lt;&lt; <span class="hljs-built_in">floor</span>(x) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;y = <span class="hljs-number">12.3</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Ceiling value of y=12.3 : "</span> &lt;&lt; <span class="hljs-built_in">ceil</span>(y) &lt;&lt; <span class="hljs-built_in">endl</span>;
 &nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}






Output:
Sine value of x=<span class="hljs-number">5</span> : <span class="hljs-number">-0.958924</span>
Cosine value of x=<span class="hljs-number">5</span> : <span class="hljs-number">0.283662</span>
Tangent value of x=<span class="hljs-number">5</span> : <span class="hljs-number">-3.38052</span>
Square root value of y=<span class="hljs-number">4</span> : <span class="hljs-number">2</span>
Absolute value of z=<span class="hljs-number">-10</span> : <span class="hljs-number">10</span>
Power value: x^y = (<span class="hljs-number">5</span>^<span class="hljs-number">4</span>) : <span class="hljs-number">625</span>
Floor value of x=<span class="hljs-number">4.56</span> is : <span class="hljs-number">4</span>
Ceiling value of y=<span class="hljs-number">12.3</span> : <span class="hljs-number">13</span></code></pre>

<br>

> **[Top of Page](#top)**
