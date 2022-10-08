/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.usa.g34.reto.apiAlquilerMotos.service;

import com.usa.g34.reto.apiAlquilerMotos.model.Motocicleta;
import com.usa.g34.reto.apiAlquilerMotos.repository.MotocicletaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jpine
 */
@Service
public class MotocicletaService {
    
    @Autowired
    private MotocicletaRepository motocicletaRepository;
    
    //Lógica de negocio
    
    //GET
    public List<Motocicleta> getAll(){
        return motocicletaRepository.getAll();
    }
    
    public Optional<Motocicleta> getMotocicleta(int id){
        return motocicletaRepository.getMotocicleta(id);
    }
    
    //POST
    public Motocicleta save(Motocicleta motocicleta){
        if(motocicleta.getId()==null){
            return motocicletaRepository.save(motocicleta);
        }else{
            Optional<Motocicleta> m = motocicletaRepository.getMotocicleta(motocicleta.getId());
            if(m.isEmpty()){
                return motocicletaRepository.save(motocicleta);
            }else{
                return motocicleta;
            }
        }
    }
    
    //PUT
    public Motocicleta update(Motocicleta motocicleta){
        if(motocicleta.getId()!=null){
            Optional<Motocicleta> m = motocicletaRepository.getMotocicleta(motocicleta.getId());
            if(!m.isEmpty()){
                if(motocicleta.getName()!=null){
                    m.get().setName(motocicleta.getName());
                }
                if(motocicleta.getBrand()!=null){
                    m.get().setBrand(motocicleta.getBrand());
                }
                if(motocicleta.getYear()!=null){
                    m.get().setYear(motocicleta.getYear());
                }
                if(motocicleta.getDescription()!=null){
                    m.get().setDescription(motocicleta.getDescription());
                }
                if(motocicleta.getCategory()!=null){
                    m.get().setCategory(motocicleta.getCategory());
                }
                motocicletaRepository.save(m.get());
                return m.get();
            }else{
                return motocicleta;
            }
        }else{
            return motocicleta;
        }    
    }
    
    //DELETE
    public boolean deleteMotocicleta(int id){
        Boolean mBoolean = getMotocicleta(id).map(motocicleta -> {
            motocicletaRepository.delete(motocicleta);
            return true;
        }).orElse(false);
        return mBoolean;
    }
    
}
