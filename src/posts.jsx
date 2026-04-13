import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useState } from "react";
export default function Posts() {
  const hadithTypes = [
    {
      id: 1,
      title: "الحديث الصحيح",
      category: "مقبول",
      description: "ما اتصل سنده بنقل العدل الضابط عن مثله إلى منتهاه ولا يكون شاذاً ولا معللاً."
    },
    {
      id: 2,
      title: "الحديث الحسن",
      category: "مقبول",
      description: "ما اتصل سنده بنقل عدل خفيف الضبط عن مثله إلى منتهاه وسلم من الشذوذ والعلة."
    },
    {
      id: 3,
      title: "الحديث الضعيف",
      category: "مردود",
      description: "ما لم يجتمع فيه صفات القبول (الصحيح والحسن) بفقد أحد شروطهما."
    },
    {
      id: 4,
      title: "الحديث الموضوع",
      category: "مردود",
      description: "هو الكذب المختلق المصنوع المنسوب إلى رسول الله ﷺ زوراً وبهتاناً."
    },
    {
      id: 5,
      title: "الحديث المتواتر",
      category: "مقبول قطعي",
      description: "ما رواه جمع غفير تحيل العادة تواطؤهم على الكذب من أول السند إلى آخره."
    },
    {
      id: 6,
      title: "الحديث المرسل",
      category: "مردود (غالباً)",
      description: "ما رفعه التابعي إلى النبي ﷺ مباشرة بسقوط الصحابي من السند."
    },
    {
      id: 7,
      title: "الحديث المعضل",
      category: "مردود",
      description: "ما سقط من سنده راويان فأكثر على التوالي في أي موضع كان."
    },
    {
      id: 8,
      title: "الحديث القدسي",
      category: "قد يكون صحيحا او ضعيفا او موضوعا",
      description: "ما رواه النبي ﷺ عن ربه عز وجل بلفظه هو، مع نسبته لله سبحانه."
    }
  ];

  const [comments, setComments] = useState({});
  const [showInput, setShowInput] = useState({});

  // add comment...
  const addComment = (postId, text) => {
    if (!text.trim()) return;

    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), text],
    });
  };

  // onpen and close input...

  const toggleInput = (postId) => {
    setShowInput({
      ...showInput,
      [postId]: !showInput[postId],
    });
  };

  // add like...
  const [likes, setLikes] = useState({});
  const addLike = (postId) => {
    setLikes({
      ...likes,
      [postId]: !likes[postId],
    });
  };
  console.log(likes)
  // add share...

  const [shares, setShares] = useState({});

  const addShare = (postId) => {
    setShares({
      ...shares,
      [postId]: (shares[postId] || 0) + 1,
    });
  };

  return (
    <div className="posts">
      <h1>مصطلح الحديث</h1>
      {hadithTypes.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="post-title">
              <h2>{post.title}</h2>
              <p>{post.category}</p>
            </div>
            <p>{post.description}</p>
            <div className="post-icons">
              <FaHeart
                onClick={() => addLike(post.id)}
                style={{
                  color: likes[post.id] ? "red" : "#777",
                  transform: likes[post.id] ? "scale(1.2)" : "scale(1)",
                  transition: "0.2s",
                  cursor: "pointer"
                }}
                />
              <FaComment onClick={() => toggleInput(post.id)} />
              <FaShare onClick={() => addShare(post.id)} />
            </div>
            <div className="comment-count">
              <p>{likes[post.id] || 0} likes</p>
              <p>{comments[post.id]?.length || 0} comments</p>
              <p>{shares[post.id] || 0} shares</p>
            </div>
            {/* comment input */}

            {showInput[post.id] && (
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addComment(post.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            )}

            {/* comments */}
            <div className="comments">
              {(comments[post.id] || []).map((comment, index) => (
                <div className="comment" key={index}>
                  <p>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
