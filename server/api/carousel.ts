import db from '../../utils/firebase'
import { collection, query, where, orderBy, limit, getDocs, getDoc, doc, startAfter } from "firebase/firestore"


export default defineEventHandler(async (event) => {
const q = query(collection(db, "carousel"));
    const querySnapshot = await getDocs(q);

    const products = querySnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return products
});