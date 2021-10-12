package own.project.demo.nikecard;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import own.project.demo.jordancard.JordanCard;

import java.util.List;

@RestController
@RequestMapping("/nikeCard")
@CrossOrigin("http://localhost:3000/")
public class NikeCardWeb {
    private NikeCardService nikeCardService;



    public NikeCardWeb(NikeCardService nikeCardService){
        this.nikeCardService = nikeCardService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<NikeCard> findNikeCardById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(nikeCardService.findById(id));
    }

    @PostMapping
    public ResponseEntity<NikeCard> postNikeCard(@RequestBody NikeCard nikeCard) {
        return ResponseEntity.ok().body(nikeCardService.postNikeCard(nikeCard));
    }

    @GetMapping
    public ResponseEntity<List<NikeCard>> getAllNikeCard (){
        return ResponseEntity.ok().body(nikeCardService.getAllNikeCard());
    }


    @DeleteMapping("/{id}")
    public void deleteNikeCard (@PathVariable("id") Integer id) {
        nikeCardService.deleteNikeCard(id);
    }

}
