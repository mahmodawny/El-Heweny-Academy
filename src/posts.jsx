import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useState } from "react";

export default function Posts() {
  const hadithTypes = [
    {
      id: 1,
      title: "الحديث الصحيح",
      category: "مقبول",
      type: "accepted",
      description: "ما اتصل سنده بنقل العدل الضابط عن مثله إلى منتهاه ولا يكون شاذاً ولا معللاً."
    },
    {
      id: 2,
      title: "الحديث الحسن",
      category: "مقبول",
      type: "accepted",
      description: "ما اتصل سنده بنقل عدل خفيف الضبط عن مثله إلى منتهاه وسلم من الشذوذ والعلة."
    },
    {
      id: 3,
      title: "الحديث الضعيف",
      category: "مردود",
      type: "rejected",
      description: "ما لم يجتمع فيه صفات القبول (الصحيح والحسن) بفقد أحد شروطهما."
    },
    {
      id: 4,
      title: "الحديث الموضوع",
      category: "مردود",
      type: "rejected",
      description: "هو الكذب المختلق المصنوع المنسوب إلى رسول الله ﷺ زوراً وبهتاناً."
    },
    {
      id: 5,
      title: "الحديث المتواتر",
      category: "مقبول قطعي",
      type: "accepted",
      description: "ما رواه جمع غفير تحيل العادة تواطؤهم على الكذب من أول السند إلى آخره."
    },
    {
      id: 6,
      title: "الحديث المرسل",
      category: "مردود (غالباً)",
      type: "rejected",
      description: "ما رفعه التابعي إلى النبي ﷺ مباشرة بسقوط الصحابي من السند."
    },
    {
      id: 7,
      title: "الحديث المعضل",
      category: "مردود",
      type: "rejected",
      description: "ما سقط من سنده راويان فأكثر على التوالي في أي موضع كان."
    },
    {
      id: 8,
      title: "الحديث القدسي",
      category: "متفاوت",
      type: "neutral",
      description: "ما رواه النبي ﷺ عن ربه عز وجل بلفظه هو، مع نسبته لله سبحانه."
    }
  ];

  const [comments, setComments] = useState({});
  const [showInput, setShowInput] = useState({});
  const [likes, setLikes] = useState({});
  const [shares, setShares] = useState({});

  const addComment = (postId, text) => {
    if (!text.trim()) return;
    setComments({ ...comments, [postId]: [...(comments[postId] || []), text] });
  };

  const toggleInput = (postId) => {
    setShowInput({ ...showInput, [postId]: !showInput[postId] });
  };

  const addLike = (postId) => {
    setLikes({ ...likes, [postId]: !likes[postId] });
  };

  const addShare = (postId) => {
    setShares({ ...shares, [postId]: (shares[postId] || 0) + 1 });
  };

  const badgeClass = (type) => {
    if (type === "accepted") return "badge badge-accepted";
    if (type === "rejected") return "badge badge-rejected";
    return "badge badge-neutral";
  };

  return (
    <div className="posts">
      <h1>مصطلح الحديث</h1>
      {hadithTypes.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-title">
            <h2>{post.title}</h2>
            <span className={badgeClass(post.type)}>{post.category}</span>
          </div>
          <p>{post.description}</p>

          <div className="post-icons">
            <FaHeart
              onClick={() => addLike(post.id)}
              style={{
                color: likes[post.id] ? "#e53e3e" : undefined,
                transform: likes[post.id] ? "scale(1.2)" : "scale(1)",
                transition: "0.2s",
                cursor: "pointer"
              }}
            />
            <FaComment onClick={() => toggleInput(post.id)} />
            <FaShare onClick={() => addShare(post.id)} />
          </div>

          <div className="comment-count">
            <span>{likes[post.id] ? "1" : "0"} إعجاب</span>
            <span>{comments[post.id]?.length || 0} تعليق</span>
            <span>{shares[post.id] || 0} مشاركة</span>
          </div>

          {showInput[post.id] && (
            <div className="comment-input">
              <input
                type="text"
                placeholder="اكتب تعليقاً..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          )}

          <div className="comments">
            {(comments[post.id] || []).map((comment, index) => (
              <div className="comment" key={index}>
                <p>{comment}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
